

import { ActionTypes } from "../action-type";


let initialState = {
    city: {
        info: {}
    },   
    backHome: false,
    favorites: [],
    darkMode: false
}


export const weatherReducer = (state = initialState, action) => {

    switch (action.type) {


        case ActionTypes.SET_CITY_NAME:
            return { ...state, city: { ...state.city , name: action.payload  } };

        case ActionTypes.SET_CITY:
            
            return { ...state, city: { ...state.city , info:{ ...action.payload } } };

        case ActionTypes.ADD_TO_FAVORITES:

           
            return { ...state, favorites: [ ...state.favorites, {...action.payload} ] };

        case ActionTypes.SET_FAVORITES:
            
            return { ...state, favorites: [...action.payload ] };

        case ActionTypes.TOGGLE_IS_SAVED:
            
            return { ...state, city: { ...state.city , info:{...state.city.info, current: { ...state.city.info.current, isSaved: action.payload} } } };
        
            case ActionTypes.TOGGLE_DARK_MODE:
            
            return { ...state, darkMode: action.payload };


        default:
            return state;
    }


}