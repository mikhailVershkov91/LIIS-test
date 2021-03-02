import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ticketsReducer from "./tickets-reducer";

let rootReducer = combineReducers({
	// auth: authReducer,
	tickets: ticketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
