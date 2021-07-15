import React, { useEffect, useState } from 'react'
import { getQuestions } from '../api'

export const Questions = (props) => {
  const [expanded, setExpanded] = useState(false)
  const [questions, setQuestions] = useState({})
  const [loading, setLoading] = useState(true)

  const { selectedCategory } = props
  const handleExpanded = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    getQuestions(selectedCategory).then(data => {
      setQuestions(data)
      setLoading(false)
    })
  }, [selectedCategory])

  return loading
    ? 'Questions are loading'
    : (
      <>
        <div className="">
          <button
            className='button is-primary'
          >
            Back to all Categories
          </button>
          <h2>{selectedCategory.name}</h2>
        </div>
        {questions.map((data) => {
          return (
            <div key={data.question} class="tile is-ancestor">
                <div key={data.question} class="tile is-4 is-parent">
                <div key={data.question} class="tile is-child box">
                 <p>{data.question}</p>
                 {expanded ? 'Hide Answer' : 'Show Answer'}
            <button onClick={handleExpanded} class="card-header-icon" aria-label="more options">
              <span class="icon">
              <i class="fas fa-question-circle"></i>
              </span>
            </button>
            {expanded && (
              <>
                <p>{data.correct_answer}</p>
              </>
            )}
            </div>
            </div>
            </div>
          )
        })}
      </>
      )
}
