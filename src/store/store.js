import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ticketsReducer from "./tickets-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from "redux-form";

let rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	tickets: ticketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
