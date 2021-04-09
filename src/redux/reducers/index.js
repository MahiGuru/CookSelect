import {combineReducers} from 'redux';
import cookReducer from './cookReducer';
import loginReducer from './loginReducer';
import recipeReducer from './loginReducer';

export default combineReducers({
    user: loginReducer, 
    recipes : recipeReducer,
    cooks: cookReducer
})