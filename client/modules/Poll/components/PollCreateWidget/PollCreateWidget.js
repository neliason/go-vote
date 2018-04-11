import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './PollCreateWidget.css';

export class PollCreateWidget extends Component {
  addPoll = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPoll(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPoll ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create Poll</h2>
          <input placeholder="Author's Name" className={styles['form-field']} ref="name" />
          <input placeholder="Poll Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Poll Content" className={styles['form-field']} ref="content" />
          <a className={styles['poll-submit-button']} href="#" onClick={this.addPoll}>Submit</a>
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
