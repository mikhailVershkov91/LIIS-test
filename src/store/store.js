import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import ticketsReducer from "./tickets-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";
import { ticketsWatcher } from "../saga/tickets-saga";

const sagaMiddleware = createSagaMiddleware();

let rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	tickets: ticketsReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ticketsWatcher);

export default store;
