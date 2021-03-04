import { put, takeEvery, call } from "redux-saga/effects";
import { setTicketsAC, LOAD_TICKETS } from "../store/tickets-reducer";
import axios from "axios";

function fetchTickets(date) {
	return axios({
		method: "GET",
		baseURL: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/JFK-sky/SVO-sky/${date}`,
		headers: {
			"x-rapidapi-key": "db30e2ca2amsh8f6539960949c96p17247fjsnc41af8a6c425",
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		},
	});
}

function* ticketsWorker({ date }) {
	const tickets = yield call(fetchTickets, date);
	yield put(setTicketsAC(tickets));
}

export function* ticketsWatcher() {
	yield takeEvery(LOAD_TICKETS, ticketsWorker);
}
