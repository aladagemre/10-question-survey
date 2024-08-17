import React, { useState } from 'react';
import Survey from '../components/Survey';
import Results from '../components/Results';

const Home = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const startSurvey = () => {
    setSurveyStarted(true);
    setSurveyCompleted(false);
    setAnswers([]);
  };

  const completeSurvey = (finalAnswers) => {
    setAnswers(finalAnswers);
    setSurveyCompleted(true);
    setSurveyStarted(false);
  };

  const resetSurvey = () => {
    setSurveyStarted(false);
    setSurveyCompleted(false);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4 font-sans text-gray-800">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center text-indigo-600">Job Satisfaction Survey</h1>
          {!surveyStarted && !surveyCompleted && (
            <div className="text-center">
              <p className="text-gray-700">Welcome to our job satisfaction survey. This survey consists of 10 questions and will help us understand your level of job satisfaction.</p>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-8 mx-auto" onClick={startSurvey}>Start Survey</button>
            </div>
          )}
          {surveyStarted && (
            <Survey onComplete={completeSurvey} />
          )}
          {surveyCompleted && (
            <Results answers={answers} onReset={resetSurvey} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;