import { combineReducers } from "redux";

const user = (state = null) => state;

const cars = (state = []) => state;
const username = (state = "") => state;
const email = (state = "") => state;

export default combineReducers({ user, cars, username, email });
