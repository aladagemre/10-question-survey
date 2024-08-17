import React from 'react';
import PropTypes from 'prop-types';
import { calculateScore, interpretScore } from '../utils/calculations';

const Results = ({ answers, onReset }) => {
  const score = calculateScore(answers);
  const interpretation = interpretScore(score);

  return (
    <div className="results space-y-4 p-6 bg-white rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-center text-indigo-600">Survey Results</h2>
      <p className="text-lg">Your total score: {score} out of 50</p>
      <p className="text-lg">Interpretation: {interpretation}</p>
      <h3 className="text-xl font-semibold">Your Answers:</h3>
      <ul className="space-y-2">
        {answers.map((answer, index) => (
          <li key={index} className="bg-indigo-50 p-3 rounded-lg">
            <span className="font-semibold">Question {index + 1}:</span> {answer}
          </li>
        ))}
      </ul>
      <button
        onClick={onReset}
        className="w-full py-2 px-4 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg transition duration-200"
      >
        Take Survey Again
      </button>
    </div>
  );
};

Results.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Results;