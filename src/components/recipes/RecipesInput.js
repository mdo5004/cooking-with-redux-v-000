import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../../actions/recipes'
import { ConnectedAddIngredients } from '../ingredients/AddIngredients'


export class RecipesInput extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            calories: 0,
        }
    }
    handleOnSubmit(event) {
        console.log(this.props.addRecipe)
        event.preventDefault()
//        let recipe = Object.assign({}, this.state, {ingredientIds: this.props.selectedIngredients})
        debugger
        //        this.props.addRecipe(recipe)
    }
    handleOnChange = (e,field) => {
        if (field === "name"){
            this.setState({
                ...this.state,
                name: e.target.value,
            })
        } else {
            this.setState({
                ...this.state,
                calories: e.target.value,
            })
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <label>Recipe
                        <input type='text' onChange={ event => this.handleOnChange(event,'name')} value={this.state.name} placeholder="Spaghetti and Meatballs"></input>
                    </label>
                    <label>Calories
                        <input type='text' onChange={ event => this.handleOnChange(event,'calories')} value={this.state.calories} placeholder="0"></input>
                    </label>
                    <ConnectedAddIngredients />
                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state){
  return { selectedIngredients: state.recipeForm.ingredientIds }
}
export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
