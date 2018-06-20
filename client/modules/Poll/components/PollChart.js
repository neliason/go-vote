import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const PollChart = props => {
  const chartData = {
    labels: props.choices.map(choice => choice.name),
    datasets: [{
      data: props.choices.map(choice => choice.votes),
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
  };

  return (
    <div>
      <Doughnut
        data={chartData}
      />
    </div>
  );
};

PollChart.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  })).isRequired,
};

export default PollChart;
