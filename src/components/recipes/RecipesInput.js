import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addRecipe } from '../../actions/recipes'
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
        switch (field){
            case 'name':
                this.setState({
                    ...this.state,
                    name: e.target.value,
                })
                break;
            case 'calories':
                this.setState({
                    ...this.state,
                    calories: e.target.value,
                })
                break;
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type='text' onChange={ event => this.handleOnChange(event,'name')} value={this.state.name} ></input>
                    <input type='text' onChange={ event => this.handleOnChange(event,'calories')} value={this.state.calories} ></input>
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
