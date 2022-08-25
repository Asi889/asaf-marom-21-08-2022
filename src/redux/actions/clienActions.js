import { ActionTypes } from "../action-type";
// ({tenbisRestaurants: allRestaurants?.tenBisData, Restaurants: allRestaurants?.woltData, both:[...allRestaurants?.woltData, ...allRestaurants?.tenBisData]})



export const setCity = (city) => {
  return {
    type: ActionTypes.SET_CITY,
    payload: city,
  };
};

export const setCityName = (cityName) => {
  return {
    type: ActionTypes.SET_CITY_NAME,
    payload: cityName,
  };
};

export const addToFavorites = (city) => {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: city,
  };
};
export const setFavorites = (newFavorites) => {
  return {
    type: ActionTypes.SET_FAVORITES,
    payload: newFavorites,
  };
};

export const toggleIsSaved = (bool) => {
  return {
    type: ActionTypes.TOGGLE_IS_SAVED,
    payload: bool,
  };
};
export const toggleDarkmode = (bool) => {
  return {
    type: ActionTypes.TOGGLE_DARK_MODE,
    payload: bool,
  };
};

