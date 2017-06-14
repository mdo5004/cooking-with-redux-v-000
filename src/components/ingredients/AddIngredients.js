import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedAddIngredient } from './AddIngredient';

export class AddIngredients extends Component {

    render(){

        let addIngredients = this.props.unselectedIngredients &&  this.props.unselectedIngredients.map((ingredient) => {
            return <ConnectedAddIngredient {...ingredient} />
        })
        
        
        let ingredients = this.props.selectedIngredients && this.props.selectedIngredients.map((ingredient) => {
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
  let selectedIngredients = state.recipeForm.ingredientIds.map(function(ingredientId){
    
  })
  let unselectedIngredients = state.ingredients.filter( ingredient => {
      
  })
  return {ingredients: state.ingredients || [],
    selectedIngredients: selectedIngredients || [],
    unselectedIngredients: unselectedIngredients || []}
}
export const ConnectedAddIngredients = connect(mapStateToProps)(AddIngredients)