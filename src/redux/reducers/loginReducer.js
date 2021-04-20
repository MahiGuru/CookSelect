/* eslint-disable prettier/prettier */
import {
  AUTHENTICATE,
  USER,
  LOGIN_TYPE,
  LOADING,
  LOGOUT,
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
    case LOGOUT:
      return {...state, isLoggedOut: true, loading: false};
  }
  return state;
};

export default loginReducer
