import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(res => setCategories(res.data.trivia_categories))
  }, [])

  return (
    <div className="container">
      <div className="App" class="notification is-black">
        <h1>Trivia</h1>
      </div>
      <div>
        <h1>Categories:</h1>
        <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-align-content-space-between">
          {categories.map(category => {
            return (
              <div key={category.id} class="card" class="tile is-parent is-6">
                <p class="card-content" class="title has-text-centered tile is-child box">{category.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
