import { authAPI } from '../API/API';
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			};

		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getAuthUserData = (userId) => (dispatch) => {
	authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data.login;
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
};

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData());
		}
	});
};

export const logout = () => (dispatch) => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		} else {
			let message = response.data.message.length > 0 ? response.data.message[0] : "You have entered an incorrect email address or password.";
			dispatch(stopSubmit("login", {_error: message}));
		}
	});
};

export default authReducer;
