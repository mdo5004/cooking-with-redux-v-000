import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {

    render(){
        
        let addIngredients = this.props.unselectedIngredients.map((ingredient) => {
            console.log("++++++++++Ingredient+++++++++++")
            console.log(ingredient.name)
            return <ConnectedAddIngredient {...ingredient} />
        })
        
        
        let ingredients = this.props.selectedIngredients.map((ingredient) => {
            return <li> {ingredient.name} </li>
        })

        return(
            <div>
                <div>
                    Ingredients
                    {ingredients}
                </div>
                <div>
                    Add Ingredients
                    {addIngredients}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let ingredients = state.ingredients;
    let ingredientIds = state.recipeForm.ingredientIds;
    
  let selectedIngredients = ingredientIds.map(function(ingredientId){
        return ingredients.find(function(ingredient){
            return ingredient.id === ingredientId
        })
  })
  let unselectedIngredients = state.ingredients.filter( ingredient => {
      return ingredients.filter(function(ingredient){
          return ingredientIds.includes(ingredient.id)
      })
  })
  return {unselectedIngredients: unselectedIngredients,
         selectedIngredients: selectedIngredients,
         }
}
export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)