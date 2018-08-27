import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// Import Style
import styles from './PollCreateWidget.css';

const MAX_POLL_CHOICE_LENGTH = 80;

export class PollCreateWidget extends Component {

  state = {
    options: [
      {
        text: '',
        placeholder: 'Blue',
        id: 1,
      },
      {
        text: '',
        placeholder: 'Red',
        id: 2,
      },
    ],
    nextId: 3,
  };

  onOptionChange = (event, index) => {
    const optionText = event.target.value;
    if (optionText.length <= MAX_POLL_CHOICE_LENGTH) {
      const newOptions = this.state.options.map((option, mapIndex) => {
        if (mapIndex === index) {
          return {
            ...option,
            text: optionText,
          };
        }
        return option;
      });
      this.setState({ options: newOptions });
    }
  }

  addOption = () => {
    if (this.state.options.length < 4) {
      const newOptions = [
        ...this.state.options,
        {
          text: '',
          placeholder: `choice ${this.state.options.length + 1}`,
          id: this.state.nextId,
        },
      ];
      this.setState({
        options: newOptions,
        nextId: ++this.state.nextId,
      });
    }
  }

  deleteChoice = (indexToDelete) => {
    if (this.state.options.length > 2) {
      const newOptions = this.state.options
        .filter((choice, index) => index !== indexToDelete)
        .map((choice, index) => {
          if (index === 0) {
            return {
              ...choice,
              placeholder: 'Blue',
            };
          } else if (index === 1) {
            return {
              ...choice,
              placeholder: 'Red',
            };
          }
          return {
            ...choice,
            placeholder: `choice ${index + 1}`,
          };
        });
      this.setState({
        options: newOptions,
      });
    }
  }

  addPoll = () => {
    const titleRef = this.refs.title;
    const choices = this.state.options.map((option) => {
      return option.text;
    });
    if (titleRef.value && choices.length >= 2) {
      this.props.addPoll(this.props.user.username, titleRef.value, choices);
      titleRef.value = '';
      const newOptions = this.state.options
        .filter((option, index) => index < 2)
        .map((option) => {
          return {
            ...option,
            text: '',
          };
        });
      this.setState({ options: newOptions });
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPoll ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create Poll</h2>
          <input placeholder="What is your favorite color?" className={styles['form-field']} ref="title" />
          <div className={styles['choices-title-text']}>Choices</div>
          {this.state.options.map((option, index) =>
            <div className={styles['choice-flexbox']} key={option.id}>
              <input
                placeholder={option.placeholder}
                className={styles['choice-form-field']}
                onChange={(event) => this.onOptionChange(event, index)}
                value={this.state.options[index].text}
              />
              <i
                className={`fas fa-trash fa-lg ${styles['delete-button']}`}
                onClick={() => this.deleteChoice(index)}
              ></i>
            </div>
          )}
          <ButtonToolbar>
            <Button bsStyle="primary" href="#" onClick={this.addPoll}>Submit</Button>
            {
              this.state.options.length < 4
                ?
                <Button onClick={this.addOption}>Add Choice</Button>
                :
                null
            }
            <Button onClick={this.props.toggleAddPoll}>Close</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

PollCreateWidget.propTypes = {
  addPoll: PropTypes.func.isRequired,
  showAddPoll: PropTypes.bool.isRequired,
  toggleAddPoll: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    publicRepos: PropTypes.number,
  }),

};

export default PollCreateWidget;
