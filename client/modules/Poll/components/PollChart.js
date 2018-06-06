import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

class PollChart extends Component {

  static propTypes = {
    choices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })).isRequired,
  }

  state = {
    chartData: {
      labels: this.props.choices.map(choice => choice.name),
      datasets: [{
        data: this.props.choices.map(choice => choice.votes),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#7CBB00',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#7CBB00',
        ],
      }],
    },
  }

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.chartData}
        />
      </div>
    );
  }
}

export default PollChart;
