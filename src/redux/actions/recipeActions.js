/* eslint-disable prettier/prettier */
import React from 'react';
import {LOADING, RECIPE_INGREDIENTS, RECIPE_LIST} from '../types/recipeTypes';
const axios = require('axios').default;
const CACHES = {};
const headers = {
  'x-rapidapi-key': '71d0099feemsh8a8f9d8bf32673cp190f98jsn95607eeec72f',
  'x-rapidapi-host': 'themealdb.p.rapidapi.com',
};
export const getRecipesList = () => {
  return dispatch => {
    dispatch({type: LOADING, isLoading: true});
    const options = {
      method: 'GET',
      url: 'https://themealdb.p.rapidapi.com/latest.php',
      headers: headers,
    };
    if (!CACHES.recipeList) {
      axios
        .request(options)
        .then(function (response) {
          console.log('IF dispatched...');
          dispatch({type: RECIPE_LIST, payload: response.data.meals});
          CACHES.recipeList = response.data.meals;
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      console.log('else dispatched...');
      dispatch({type: RECIPE_LIST, payload: CACHES.recipeList});
    }
  };
};

export function searchRecipeByName(name) {
  return dispatch => {
    const options = {
      method: 'GET',
      url: 'https://themealdb.p.rapidapi.com/search.php',
      params: {s: name},
      headers: headers,
    };
    if (!CACHES.searchRecipe) {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          dispatch({type: RECIPE_LIST, payload: response.data.meals});
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
    }
  };
}

export function getRecipeByIngredient(data) {
  return {
    type: RECIPE_INGREDIENTS,
    payload: data,
  };
}
