import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createIngredient } from '../../actions/ingredients'

export class IngredientsInput extends Component {
    
    constructor(){
        super();
        this.state={
            name: '',
            calories: 0,
        }
    }
    handleOnSubmit = () => {
        this.props.createIngredient(this.state)
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
        createIngredient: createIngredient
    }, dispatch)
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
