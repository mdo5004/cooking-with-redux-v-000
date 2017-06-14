import uuidV4  from 'uuid/v4';

let initialState = [{name:"mushrooms", calories:200, id:1 }, {name:"Ground beef", calories: 200, id:2}]
 initialState = []

export default function ingredients(state = initialState, action){
    switch (action.type) {
    case 'CREATE_INGREDIENT':
      let ingredient = Object.assign({}, action.payload, {id: uuidV4()})
      return state.concat(ingredient)
    default:
      return state;
  }
}

export function selectedIngredients() {
    
}
export function unselectedIngredients(allIngredients, selectedIngredientIds){
      return allIngredients.filter(function(ingredient){
      return selectedIngredientIds.includes(ingredient.id)
  })
}