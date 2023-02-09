export default (question) => {
  let allOptions = [];
  if (question.correct_answer !== "" && question.incorrect_answers.length > 0) {
    allOptions = [question.correct_answer, ...question.incorrect_answers]
      .map((value, index) => ({ name: value, sort: Math.random(), id: index }))
      .sort((a, b) => a.sort - b.sort);
  }
  return allOptions;
};
