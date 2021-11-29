import { createStore, combineReducers } from "redux";
import { reducer } from "./my-redux";

export const store = createStore(reducer);
