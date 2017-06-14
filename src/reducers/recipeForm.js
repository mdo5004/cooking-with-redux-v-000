export default function recipeForm(state = {ingredientIds: []}, action){
    switch(action.type) {
        case "ADD_RECIPE_INGREDIENT":
            let ingredientIds = state.ingredientsIds.concat(action.payloads)
            return Object.assign({}, state, {ingredientIds: ingredientIds})
        default:
            return state;
    }
}
