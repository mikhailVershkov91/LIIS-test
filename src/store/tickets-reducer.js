export const SET_TICKETS = "SET_TICKETS";
export const LOAD_TICKETS = "LOAD_TICKETS";
export const LIKE_ACTIVATE = "LIKE_ACTIVATE";
export const LIKE_DEACTIVATE = "LIKE_DEACTIVATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = {
	tickets: [],
	favorites: 0,
	cards: [
		{ id: 1, likeIsActive: false },
		{ id: 2, likeIsActive: false },
		{ id: 3, likeIsActive: false },
		{ id: 4, likeIsActive: false },
		{ id: 5, likeIsActive: false },
		{ id: 6, likeIsActive: false },
		{ id: 7, likeIsActive: false },
		{ id: 8, likeIsActive: false },
		{ id: 9, likeIsActive: false },
	],
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
				cards: state.cards.map((card) => {
					if (card.id === action.id) {
						return { ...card, likeIsActive: true };
					}
					return card;
				}),
			};
		}
		case LIKE_DEACTIVATE: {
			return {
				...state,
				cards: state.cards.map((card) => {
					if (card.id === action.id) {
						return { ...card, likeIsActive: false };
					}
					return card;
				}),
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

export const activateLikeAC = (id) => ({
	type: LIKE_ACTIVATE,
	id,
});

export const deactivateLikeAC = (id) => ({
	type: LIKE_DEACTIVATE,
	id,
});

export const incrementAC = () => ({
	type: INCREMENT,
});

export const decrementAC = () => ({
	type: DECREMENT,
});

export default ticketsReducer;
