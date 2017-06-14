export function addRecipe(recipe){
    return {
        type:'ADD_RECIPE',
        payload: recipe,
    }
}
export function removeRecipe(recipe){
    return {
        type:'REMOVE_RECIPE',
        payload: recipe,
    }
}
export function addRecipeIngredient(id){
    return {
        type:'ADD_RECIPE_INGREDIENT',
        payload: id
    }
}