import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addRecipe } from '../../actions/recipes'
import {AddIngredients} from '../ingredients/AddIngredients'


export class RecipesInput extends Component {

    constructor(){
        super();
        this.state={
            name: '',
            calories: 0,
        }
    }
    handleOnSubmit = () => {
        this.props.addRecipe(this.state)
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
                <form onSubmit={this.handleOnSubmit}>
                    <label>Recipe
                        <input type='text' onChange={ event => this.handleOnChange(event,'name')} value={this.state.name} placeholder="Spaghetti and Meatballs"></input>
                    </label>
                    <label>Calories
                        <input type='text' onChange={ event => this.handleOnChange(event,'calories')} value={this.state.calories} placeholder="0"></input>
                    </label>
                    <AddIngredients />
                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addRecipe: addRecipe
    }, dispatch)
}

export const ConnectedRecipesInput = connect(null, mapDispatchToProps)(RecipesInput)
