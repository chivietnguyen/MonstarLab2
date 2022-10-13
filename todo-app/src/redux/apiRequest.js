import { api } from "../api/axios";
import {
	AUTH_REGISTER_URL,
	AUTH_LOGIN_URL,
	LOGIN_PAGE,
	TODO_PATH,
	getUserUrlWithId,
} from "../path/path";
import {
	registerSuccess,
	registerFailed,
	loginSuccess,
	loginFailed,
} from "./authSlice";
import { deleteAccountFailed, deleteAccountSuccess } from "./userSlice";

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

		localStorage.setItem("user", JSON.stringify(userInfo));
		dispatch(loginSuccess(userInfo));
		navigate(TODO_PATH);
	} catch (err) {
		dispatch(loginFailed());
		setErrMsg(err.response.data.error.message);
	}
};

export const deleteUser = async (userId, dispatch, navigate) => {
	try {
		await api.delete(getUserUrlWithId(userId));

		localStorage.clear();
		dispatch(deleteAccountSuccess);
		navigate(LOGIN_PAGE);
	} catch (err) {
		dispatch(deleteAccountFailed);
		alert(err.response.data.error.message);
	}
};
