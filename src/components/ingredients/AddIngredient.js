import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipeIngredient } from '../../actions/recipes'

export class AddIngredient extends Component {
    handleOnClick = (e) => {
        this.props.addRecipeIngredient(this.props.id)
    }
  render(){
    return(
        <li><button onClick={this.handleOnClick}>+</button>{this.props.name}</li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    addRecipeIngredient: addRecipeIngredient
  }, dispatch);
}
export const ConnectedAddIngredient = connect(null,mapDispatchToProps)(AddIngredient)
