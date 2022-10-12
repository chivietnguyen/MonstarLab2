import { api } from "../api/axios";
import {
	AUTH_REGISTER_URL,
	AUTH_LOGIN_URL,
	LOGIN_PAGE,
	TODO_PATH,
} from "../path/path";
import {
	registerSuccess,
	registerFailed,
	loginSuccess,
	loginFailed,
} from "./authSlice";

export const registerUser = async (user, dispatch, navigate, setErrMsg) => {
	try {
		await api.post(AUTH_REGISTER_URL, user);
		dispatch(registerSuccess());
		alert("Register Successfully!");
		navigate(LOGIN_PAGE);
	} catch (err) {
		dispatch(registerFailed());
		setErrMsg(err.response.data.error.message);
	}
};

export const loginUser = async (user, dispatch, navigate, setErrMsg) => {
	try {
		const response = await api.post(AUTH_LOGIN_URL, user);
		const userInfo = response.data.data;

		// Save userInfo to localStorage
		localStorage.setItem("user", JSON.stringify(userInfo));

		dispatch(loginSuccess(userInfo));
		navigate(TODO_PATH);
	} catch (err) {
		setErrMsg(err.response.data.error.message);
	}
};
