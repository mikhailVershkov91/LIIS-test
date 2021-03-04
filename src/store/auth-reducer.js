const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";

const initialState = {
	isAuth: Boolean(localStorage.getItem("token")),
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_AUTH: {
			return {
				...state,
				isAuth: action.isAuth,
			};
		}
		default:
			return state;
	}
};

export const toggleIsAuth = (isAuth) => ({
	type: TOGGLE_IS_AUTH,
	isAuth,
});

export default authReducer;
