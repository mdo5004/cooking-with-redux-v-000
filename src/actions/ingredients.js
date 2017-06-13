export function createIngredient(ingredient){
    return {
        type:'CREATE_INGREDIENT',
        payload: ingredient,
    }
}
export function removeIngredient(ingredient){
    return {
        type:'REMOVE_INGREDIENT',
        payload: ingredient,
    }
}
