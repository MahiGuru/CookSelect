/* eslint-disable prettier/prettier */
import {
  AUTHENTICATE,
  USER,
  LOGIN_TYPE,
  LOADING,
} from '../types/authenticateTypes';

const initialState = {data: [], loading: false, error: ''};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true, error: ''};
    case AUTHENTICATE:
      return {...state, authenticate: action.payload, loading: false};
    case USER:
      return {...state, profile: action.payload, loading: false};
    case LOGIN_TYPE:
      return {...state, data: action.payload, loading: false};
  }
  return state;
};

export default loginReducer
