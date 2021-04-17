import { COOK_TYPE, COOK_CATEGORY, COOK_LIST } from "../types/cookTypes"

const initialState = {
    counter: 0
}

const cookReducer = (state = initialState, action) => {
  switch (action.type) {
    case COOK_LIST:
        return [...state, action.payload]
    case COOK_TYPE:
        return [...state, action.payload]
    case COOK_CATEGORY:
        return [...state, action.payload] 
  }
  return state
}

export default cookReducer