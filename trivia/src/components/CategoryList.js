import React from 'react'

export const CategoryList = (props) => {
  const { categories, setCategories } = props
  return (
    <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-align-content-space-between">
      {categories.map(category => {
        return (
          <div key={category.id} class="card" class="tile is-parent is-6">                
            <p class="card-content" class="title has-text-centered tile is-child box">{category.name}
              <br></br>
              <button class="button is-primary is-outlined">Play</button></p>
          </div>
        )
      })}
    </div>
  )
}
