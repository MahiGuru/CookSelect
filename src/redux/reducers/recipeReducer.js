import { RECIPE_TYPE, RECIPE_DETAIL, RECIPE_CATEGORY, RECIPE_INGREDIENTS, RECIPE_LIST } from "../types/recipeTypes"
 
const initialState = { data: [],   loading: false,   error: ''};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
        return {...state, loading: true, error:''};
    case RECIPE_LIST:
        console.log("ACTION PAYLOADD >>>> RECIPES <<<< ", action.payload);
        return {...state, recipes: action.payload, loading: false};
    case RECIPE_DETAIL:
        return {...state, recipe_detail: action.payload, loading: false};
    case RECIPE_TYPE:
        return {...state, recipe_type: action.payload, loading: false};
    case RECIPE_CATEGORY:
        return {...state, recipe_category: action.payload, loading: false};
    case RECIPE_INGREDIENTS:
        return {...state, recipe_ingrediant: action.payload, loading: false};
  }
  return state 
}

export default recipeReducer