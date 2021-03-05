// import { ticketsAPI } from "../plugins/axios";

export const SET_TICKETS = "SET_TICKETS";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const LIKE_ACTIVATE = "LIKE_ACTIVATE";
export const LIKE_DEACTIVATE = "LIKE_DEACTIVATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
	tickets: [],
	isFetching: false,
	likeIsActive: false,
	favorites: 0,
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TICKETS: {
			return {
				...state,
				tickets: action.tickets,
			};
		}
		case LIKE_ACTIVATE: {
			return {
				...state,
				likeIsActive: true,
			};
		}
		case LIKE_DEACTIVATE: {
			return {
				...state,
				likeIsActive: false,
			};
		}
		case INCREMENT: {
			return {
				...state,
				favorites: state.favorites + 1,
			};
		}
		case DECREMENT: {
			return {
				...state,
				favorites: state.favorites - 1,
			};
		}
		default:
			return state;
	}
};

export const loadTicketsAC = (date) => ({
	type: LOAD_TICKETS,
	date,
});

export const setTicketsAC = (tickets) => ({
	type: SET_TICKETS,
	tickets,
});

export const activateLikeAC = () => ({
	type: LIKE_ACTIVATE,
});

export const deactivateLikeAC = () => ({
	type: LIKE_DEACTIVATE,
});

export const incrementAC = () => ({
	type: INCREMENT,
});

export const decrementAC = () => ({
	type: DECREMENT,
});

// export const getTickets = (date) => {
// 	return async (dispatch) => {
// 		const response = await ticketsAPI.getTickets(date);
// 		console.log(response);
// 		dispatch(setTicketsAC(response));
// 	};
// };

export default ticketsReducer;
