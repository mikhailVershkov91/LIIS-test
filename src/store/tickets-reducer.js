// import { ticketsAPI } from "../plugins/axios";

export const SET_TICKETS = "SET_TICKETS";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const LOAD_TICKETS = "LOAD_TICKETS";

const initialState = {
	tickets: [],
	isFetching: false,
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TICKETS: {
			return {
				...state,
				tickets: action.tickets,
			};
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			};
		}
		default:
			return state;
	}
};

export const setTicketsAC = (tickets) => ({
	type: SET_TICKETS,
	tickets,
});

export const loadTicketsAC = (date) => ({
	type: LOAD_TICKETS,
	date,
});

// export const toggleIsFetching = (isFetching) => ({
// 	type: TOGGLE_IS_FETCHING,
// 	isFetching,
// });

// export const getTickets = (date) => {
// 	return async (dispatch) => {
// 		const response = await ticketsAPI.getTickets(date);
// 		console.log(response);
// 		dispatch(setTicketsAC(response));
// 	};
// };

export default ticketsReducer;
