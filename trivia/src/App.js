import React, { useState, useEffect } from 'react'
import './App.css'
import { getCategoryList } from './api'
import { Header } from './components/Header'

function App () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoryList().then((categories) => setCategories(categories))
  }, [])

  return (
    <div>
      <Header />
      <h1>Categories:</h1>
      <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-align-content-space-between">          {categories.map(category => {
        return (
          <div key={category.id} class="card" class="tile is-parent is-6">                <p class="card-content" class="title has-text-centered tile is-child box">{category.name}
            <br></br>
            <a class="button is-primary is-outlined">Play</a></p>
            </div>
        )
      })}
      </div>
    </div>
  )
}

export default App;
