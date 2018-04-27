import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// Import Style
import styles from './PollCreateWidget.css';

export class PollCreateWidget extends Component {
  addPoll = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const choiceRef1 = this.refs.choice1;
    const choiceRef2 = this.refs.choice2;
    if (nameRef.value && titleRef.value && this.refs.choice1 && this.refs.choice2) {
      this.props.addPoll(nameRef.value, titleRef.value, [choiceRef1.value, choiceRef2.value]);
      nameRef.value = titleRef.value = choiceRef1.value = choiceRef2.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPoll ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create Poll</h2>
          <input placeholder="Author's Name" className={styles['form-field']} ref="name" />
          <input placeholder="What is your favorite color?" className={styles['form-field']} ref="title" />
          Choices
          <input placeholder="Blue" className={styles['form-field']} ref="choice1" />
          <input placeholder="Red" className={styles['form-field']} ref="choice2" />
          <ButtonToolbar>
            <Button bsStyle="primary" href="#" onClick={this.addPoll}>Submit</Button>
            <Button onClick={this.addChoice}>Add Choice</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

PollCreateWidget.propTypes = {
  addPoll: PropTypes.func.isRequired,
  showAddPoll: PropTypes.bool.isRequired,
};

export default PollCreateWidget;
