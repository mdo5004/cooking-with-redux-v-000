import {combineReducers} from 'redux';
import ingredients from './ingredients';
import recipeForm from './recipeForm';
import recipes from './recipes';


export const rootReducer = combineReducers({
    ingredients: ingredients,
    recipeForm: recipeForm,
    recipes: recipes
})