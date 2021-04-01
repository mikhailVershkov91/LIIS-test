import ticketsReducer, {
	incrementAC,
	decrementAC,
	activateLikeAC,
	deactivateLikeAC,
} from "./tickets-reducer";

let state = {
	tickets: [],
	favorites: 3,
	cards: [
		{ id: 1, likeIsActive: false },
		{ id: 2, likeIsActive: false },
		{ id: 3, likeIsActive: false },
		{ id: 4, likeIsActive: false },
		{ id: 5, likeIsActive: true },
		{ id: 6, likeIsActive: false },
		{ id: 7, likeIsActive: false },
		{ id: 8, likeIsActive: false },
		{ id: 9, likeIsActive: false },
	],
};

test("favorites should be incremented", () => {
	let action = incrementAC();

	let newState = ticketsReducer(state, action);

	expect(newState.favorites).toBe(4);
});

test("favorites should be decremented", () => {
	let action = decrementAC();

	let newState = ticketsReducer(state, action);

	expect(newState.favorites).toBe(2);
});

test("check the value (true) in likeIsActive", () => {
	let action = activateLikeAC(3);

	let newState = ticketsReducer(state, action);

	expect(newState.cards[2].likeIsActive).toBe(true);
});

test("check the value (false) in likeIsActive", () => {
	let action = deactivateLikeAC(6);

	let newState = ticketsReducer(state, action);

	expect(newState.cards[5].likeIsActive).toBe(false);
});
