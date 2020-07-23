import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredients = (ingName) => {
  return { type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName };
};

export const removeIngredients = (ingName) => {
  return { type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        return dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        return dispatch(fetchIngredientsFailed());
      });
  };
};
