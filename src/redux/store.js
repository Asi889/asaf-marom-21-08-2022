import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
// import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import  { combineReducers } from 'redux';
import {weatherReducer} from './reducer/weatherReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
})
// export default rootReducer
// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore(
  {reducer: rootReducer},
  // initalState,
  // composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);