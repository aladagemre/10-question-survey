export const calculateScore = (answers) => {
  const scoreMap = {
    'Strongly Agree': 5,
    'Agree': 4,
    'Neutral': 3,
    'Disagree': 2,
    'Strongly Disagree': 1
  };

  return answers.reduce((total, answer) => total + scoreMap[answer], 0);
};

export const interpretScore = (score) => {
  if (score >= 40) return "High satisfaction";
  if (score >= 30) return "Moderate satisfaction";
  if (score >= 20) return "Low satisfaction";
  return "Very low satisfaction";
};
