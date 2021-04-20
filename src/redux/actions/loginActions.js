/* eslint-disable prettier/prettier */
import {
  AUTHENTICATE,
  USER,
  LOGIN_TYPE,
  LOADING,
  LOGOUT,
} from '../types/authenticateTypes';
import Auth0 from 'react-native-auth0';

const CACHES = {};

export const login = () => {
  const auth0 = new Auth0({ domain: 'cook-cuttr-mobile.us.auth0.com', clientId: 'i0XBuvrPtKl8h8ZkNhh3McpNyxWD7nWA' });
  return dispatch => {
    dispatch({type: LOADING, isLoading: true});
    console.log("CACHES['authenticate']", CACHES.authenticate);
    if (!CACHES.authenticate) {
      return auth0
        .webAuth
        .authorize({scope: 'openid profile email'})
        .then(credentials => {
          CACHES.authenticate = credentials;
          dispatch({type: AUTHENTICATE, payload: credentials});
        }).catch(error => console.log(error));
    } else if (CACHES.authenticate) {
      console.log('else dispatched...');
      dispatch({type: AUTHENTICATE, payload: CACHES.authenticate});
    }
  };
};

export function getUserProfile(token) {
  const auth0 = new Auth0({ domain: 'cook-cuttr-mobile.us.auth0.com', clientId: 'i0XBuvrPtKl8h8ZkNhh3McpNyxWD7nWA' });
  return dispatch => {
      dispatch({type: LOADING, isLoading: true});
      if (!CACHES.user_profile) {
        auth0.auth
              .userInfo({token })
              .then(res => {
                dispatch({type: USER, payload: res});
                CACHES.user_profile = res;
              })
              .catch(err => dispatch({type: USER, payload: {error: true, msg: 'failed to get the user data'}}));
      } else {
          dispatch({type: USER, payload: CACHES.user_profile});
      }
  };
}

export function logout() {
  const auth0 = new Auth0({ domain: 'cook-cuttr-mobile.us.auth0.com', clientId: 'i0XBuvrPtKl8h8ZkNhh3McpNyxWD7nWA' });
  return dispatch => {
    dispatch({type: LOADING, isLoading: true});
    return auth0.webAuth.clearSession().then(res => {
              dispatch({type: AUTHENTICATE, payload: null});
              dispatch({type: LOGOUT, payload: null});
              CACHES = {};
            }).catch(error => {
              dispatch({type: LOGOUT, payload: null});
            });
  };
}
