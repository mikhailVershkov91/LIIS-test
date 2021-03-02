import { ticketsAPI } from "../plugins/axios";

const GET_TICKETS = "GET_TICKETS";

const initialState = {
	tickets: [],
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TICKETS: {
			return {
				...state,
				tickets: action.tickets,
			};
		}
		default:
			return state;
	}
};

export const getTicketsAC = (tickets) => ({
	type: GET_TICKETS,
	tickets,
});

export const getTickets = (date) => {
	return async (dispatch) => {
		const response = await ticketsAPI.getTickets(date);
		console.log(response);
		dispatch(getTicketsAC(response));
	};
};

export default ticketsReducer;
