import React from 'react';
import {
  RECIPE_INGREDIENTS,
  RECIPE_LIST,
} from '../types/recipeTypes';
const axios = require('axios').default;

export const getRecipesList = () => {
  return dispatch => {
    const options = {
      method: 'GET',
      url: 'https://themealdb.p.rapidapi.com/latest.php',
      headers: {
        'x-rapidapi-key': '71d0099feemsh8a8f9d8bf32673cp190f98jsn95607eeec72f',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com'
      }
    }; 
    axios.request(options).then(function (response) { 
      dispatch({type: RECIPE_LIST, payload: response.data.meals})
    }).catch(function (error) {
      console.error(error);
    });
  }
};

export function searchRecipeByName(data) {
  return dispatch => {
      const options = {
        method: 'GET',
        url: 'https://themealdb.p.rapidapi.com/search.php',
        params: {s: data},
        headers: {
          'x-rapidapi-key': '71d0099feemsh8a8f9d8bf32673cp190f98jsn95607eeec72f',
          'x-rapidapi-host': 'themealdb.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch({type: RECIPE_LIST, payload: response.data.meals})
      }).catch(function (error) {
        console.error(error);
      });
  }
}

export function getRecipeByIngredient(data) {
  return {
    type: RECIPE_INGREDIENTS,
    payload: data,
  };
}
