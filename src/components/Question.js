import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            aria-label={`Select answer: ${option}`}
            className={`w-full py-2 px-4 ${
              selectedAnswer === option
                ? 'bg-indigo-200 text-indigo-700'
                : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
            } rounded-lg transition duration-200`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};

export default Question;