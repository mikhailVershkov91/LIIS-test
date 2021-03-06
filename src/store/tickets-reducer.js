export const SET_TICKETS = "SET_TICKETS";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const LIKE_ACTIVATE = "LIKE_ACTIVATE";
export const LIKE_DEACTIVATE = "LIKE_DEACTIVATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
	tickets: [],
	isFetching: false,
	favorites: 0,
	// cards: [
	// 	{ name: "card1", id: 1, likeIsActive: false },
	// 	{ name: "card2", id: 2, likeIsActive: false },
	// 	{ name: "card3", id: 3, likeIsActive: false },
	// 	{ name: "card4", id: 4, likeIsActive: false },
	// 	{ name: "card5", id: 5, likeIsActive: false },
	// 	{ name: "card6", id: 6, likeIsActive: false },
	// 	{ name: "card7", id: 7, likeIsActive: false },
	// 	{ name: "card8", id: 8, likeIsActive: false },
	// 	{ name: "card9", id: 9, likeIsActive: false },
	// 	{ name: "card10", id: 10, likeIsActive: false },
	// 	{ name: "card11", id: 11, likeIsActive: false },
	// 	{ name: "card12", id: 12, likeIsActive: false },
	// ],
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

		// case LIKE_ACTIVATE: {
		// 	return {
		// 		...state,
		// 		cards: state.cards.map((card) => {
		// 			if (card.id === action.id) {
		// 				return { ...card, likeIsActive: true };
		// 			}
		// 			return card;
		// 		}),
		// 	};
		// }
		// case LIKE_DEACTIVATE: {
		// 	return {
		// 		...state,
		// 		cards: state.cards.map((card) => {
		// 			if (card.id === action.id) {
		// 				return { ...card, likeIsActive: false };
		// 			}
		// 			return card;
		// 		}),
		// 	};
		// }

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
