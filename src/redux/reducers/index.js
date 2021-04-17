import {combineReducers} from 'redux';
import cookReducer from './cookReducer';
import recipeReducer from './recipeReducer';

export default combineReducers({
    recipes : recipeReducer,
    cooks: cookReducer
})