import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
      .then(res => setCategories(res.data))
  }, [])

  return (
    <div className="container">
      <div className="App">
        <h1>Trivia</h1>
      </div>
      <div>
        <h1>Categories:</h1>
        {categories.map(category => {
          return (
            <div key={category.slug}>
              <p>{category.Category}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
