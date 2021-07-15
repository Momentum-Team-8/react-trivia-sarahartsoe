import React, { useMemo } from 'react';
import shuffle from 'lodash';

export const AnswerChoices = ({ answers, setAnswered, checkAnswer, commitAnswer }) => {
  const { correctAnswer, incorrectAnswers } = answers
  const shuffledAnswers = useMemo(
    () => shuffle([correctAnswer, ...incorrectAnswers]),
    [correctAnswer, incorrectAnswers]
  )
  const handleClick = (answer) => {
    setAnswered(true)
    checkAnswer(correctAnswer === answer)
    commitAnswer()
  };
  return shuffledAnswers.__wrapped__.map((item) => {
    return (
      <button
        key={item}
        class='button is-primary is-light is-rounded'
        onClick={() => {
          handleClick(item)
        }}
      >
        {item}
      </button>
    )
  })
};
