import React from 'react'

export const CategoryList = (props) => {
  const { categories, setSelectedCategory } = props
  return (
    <div>
    <h1>   Categories:</h1>
    <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-align-content-space-between">
      {categories.map(category => {
        return (
          <div key={category.id} class="card" class="tile is-parent is-6">                
            <p class="card-content" class="title has-text-centered tile is-child box">{category.name}
              <br></br>
              <button class="button is-primary is-outlined" onClick={() => setSelectedCategory(category)}>Play</button></p>
          </div>
        )
      })}
    </div>
    </div>
  )
}
