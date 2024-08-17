import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const questions = [
  { id: 1, text: "I am satisfied with my current job.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 2, text: "My work gives me a feeling of personal accomplishment.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 3, text: "I have the tools and resources to do my job well.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 4, text: "I have the opportunities for professional growth in this organization.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 5, text: "I feel valued for the work that I do.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 6, text: "My supervisor provides me with regular feedback on my performance.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 7, text: "I have a good work-life balance in my current role.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 8, text: "I feel my opinions are valued at work.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 9, text: "I have a clear understanding of my career or promotion path.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] },
  { id: 10, text: "Overall, I would recommend this company as a great place to work.", options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"] }
];

const Survey = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (newAnswers.every(ans => ans !== null)) {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (answers.every(ans => ans !== null)) {
      onComplete(answers);
    }
  };

  const handleSubmit = () => {
    if (answers.every(ans => ans !== null)) {
      onComplete(answers);
    }
  };

  return (
    <div className="space-y-6">
      <Question 
        question={questions[currentQuestion]} 
        onAnswer={handleAnswer}
        selectedAnswer={answers[currentQuestion]}
      />
      <p>Question {currentQuestion + 1} of {questions.length}</p>
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg font-semibold transition duration-200 ${
            currentQuestion === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNext}
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition duration-200"
        >
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

Survey.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Survey;