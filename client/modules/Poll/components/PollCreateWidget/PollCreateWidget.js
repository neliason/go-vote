import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';

// Import Style
import styles from './PollCreateWidget.css';

export class PollCreateWidget extends Component {

  state = {
    options: [
      {
        text: '',
        placeholder: 'Blue',
      },
      {
        text: '',
        placeholder: 'Red',
      },
    ],
  };

  onOptionChange = (event, index) => {
    const optionText = event.target.value;
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

  addOption = () => {
    const newOptions = [
      ...this.state.options,
      {
        text: '',
        placeholder: `choice ${this.state.options.length + 1}`,
      },
    ];
    this.setState({
      options: newOptions,
    });
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
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const choices = this.state.options.map((option) => {
      return option.text;
    });
    if (nameRef.value && titleRef.value && choices.length >= 2) {
      this.props.addPoll(nameRef.value, titleRef.value, choices);
      nameRef.value = titleRef.value = '';
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
          <input placeholder="Author's Name" className={styles['form-field']} ref="name" />
          <input placeholder="What is your favorite color?" className={styles['form-field']} ref="title" />
          Choices
          {this.state.options.map((option, index) =>
            <div className={styles['choice-flexbox']}>
              <input
                placeholder={option.placeholder}
                className={styles['choice-form-field']}
                onChange={(event) => this.onOptionChange(event, index)}
                value={this.state.options[index].text}
                key={index}
              />
              <Button
                className={styles['delete-button']}
                bsStyle="danger"
                href="#"
                onClick={() => this.deleteChoice(index)}
              >
                Delete
              </Button>
            </div>
          )}
          <ButtonToolbar>
            <Button bsStyle="primary" href="#" onClick={this.addPoll}>Submit</Button>
            <Button onClick={this.addOption}>Add Choice</Button>
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
