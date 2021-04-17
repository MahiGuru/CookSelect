import { RECIPE_TYPE, RECIPE_DETAIL, RECIPE_CATEGORY, RECIPE_INGREDIENTS, RECIPE_LIST } from "../types/recipeTypes"

const initialState = []

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_LIST:
        return [...state, ...action.payload]
    case RECIPE_DETAIL:
        return [...state, action.payload]
    case RECIPE_TYPE:
        return [...state, action.payload]
    case RECIPE_CATEGORY:
        return [...state, action.payload]
    case RECIPE_INGREDIENTS:
        return [...state, action.payload]
  }
  return state 
}

export default recipeReducer