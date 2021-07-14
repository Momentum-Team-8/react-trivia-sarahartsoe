import React, { useState, useEffect } from 'react'
import './App.css'
import { getCategoryList } from './api'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { Questions } from './components/Questions'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  useEffect(() => {
    getCategoryList().then((categories) => setCategories(categories))
  }, [])

  return (
    <div>
      <Header />
      <h1>   Categories:</h1>
      <section>
        <CategoryList categories={categories} setSelectedCategory={setSelectedCategory} />
      </section>
    </div>
  )
}

export default App;
