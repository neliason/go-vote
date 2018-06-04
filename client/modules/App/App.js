import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import Actions
import { toggleAddPoll, checkUserAuthStatus } from './AppActions';
import { getUserAuthenticated } from './AppReducer';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    userAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.props.dispatch(checkUserAuthStatus());
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPollSection = () => {
    this.props.dispatch(toggleAddPoll());
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="go-vote"
            titleTemplate="%s"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            toggleAddPoll={this.toggleAddPollSection}
            userAuthenticated={this.props.userAuthenticated}
          />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    userAuthenticated: getUserAuthenticated(state),
  };
}

export default connect(mapStateToProps)(App);
