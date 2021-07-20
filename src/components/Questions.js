import React, { useEffect, useState } from "react";
import { getQuestions } from "../api";
import he from "he";
import { AnswerChoices } from "./AnswerChoices";

export const Questions = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(true);
  let [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  let [score, setScore] = useState(0)
  const { selectedCategory, setSelectedCategory } = props;
  const handleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getQuestions(selectedCategory).then((data) => {
      setQuestions(data);
      setLoading(false);
    });
  }, [selectedCategory]);
  const commitAnswer = () => {
    setAnswered(answered += 1);
    if (correct) {
      console.log(correct);
      setScore(score += 1)
    }
    setAnswered(false)
  };

  return loading ? (
    "Questions are loading"
  ) : (
    <>
      <div className="">
        <button
          className="button is-primary"
          onClick={() => setSelectedCategory(null)}
        >
          Back to all Categories
        </button>
        <h2>{selectedCategory.name}</h2>
      </div>
      {questions.map((question) => {
        return (
          <div key={question.question} class="tile is-ancestor">
            <div key={question.question} class="tile is-4 is-parent">
              <div key={question.question} class="tile is-child box">
                <p>{he.decode(question.question)}</p>
                <p>Select your answer:</p>
                <div>
                  <AnswerChoices
                    answers={{
                      correctAnswer: question.correct_answer,
                      incorrectAnswers: question.incorrect_answers,
                    }}
                    checkAnswer={setCorrect}
                    setAnswered={setAnswered}
                    commitAnswer={commitAnswer}
                  />
                </div>
                {expanded ? "Hide Answer" : "Show Answer"}
                <button
                  onClick={handleExpanded}
                  class="card-header-icon"
                  aria-label="more options"
                >
                  <span class="icon">
                    <i class="fas fa-question-circle" />
                  </span>
                </button>
                {expanded && (
                  <>
                    <p>{question.correct_answer}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

// {question.incorrect_answers.map((answer) => {
//   let shuffledAnswers
//     return (
//       <button
//         className="guess"
//         class="button is-primary is-light is-rounded"
//       >
//         {answer}
//       </button>
//     );
//   })}
