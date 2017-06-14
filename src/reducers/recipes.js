// Generate a new UUID 
// var myUUID = uuidV4();
 
// Validate a UUID as proper V4 format 
// uuidV4.isUUID(myUUID);  // true 
import uuidV4  from 'uuid/v4';

let initialState = [
    {name:"spaghetti and meatballs", calories:300, ingredientIds:[1, 2] }]
initialState=[]
export default function recipe(state = initialState, action){
    switch (action.type){
        case "ADD_RECIPE":
            return [].concat(state, Object.assign({},action.payload,{id: uuidV4()}));
        case "REMOVE_RECIPE":
            let index = state.findIndex(action.payload);
            return [].concat(state.slice(0,index), state.slice(index+1));
        default:
            return state;
    }
}
