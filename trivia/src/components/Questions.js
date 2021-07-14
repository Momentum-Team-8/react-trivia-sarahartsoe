import React, { useEffect, useState } from 'react'
import { getQuestions } from '../api'

export const Questions = (props) => {
  const [questions, setQuestions] = useState({})
  const [loading, setLoading] = useState(true)

  const { selectedCategory } = props

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
        <div className=''>
          <button
            className='button is-primary'
          >
            Back to all Categories
          </button>
          <h2>{selectedCategory.name}</h2>
        </div>
        {questions.map((data) => {
          return (
            <div key={data.question}>
              <p>{data.question}</p>
            </div>
          )
        })}
      </>
      )
}
