import { api } from "../api/axios";
import {
	AUTH_REGISTER_URL,
	AUTH_LOGIN_URL,
	LOGIN_PAGE,
	TODO_PATH,
	getUserUrlWithId,
	API_TASKS_URL,
} from "../path/path";
import {
	registerSuccess,
	registerFailed,
	loginSuccess,
	loginFailed,
} from "./authSlice";
import { addTodoSuccess } from "./todosSlice";
import {
	deleteAccountFailed,
	deleteAccountSuccess,
	editProfileFailed,
	editProfileSuccess,
} from "./userSlice";

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
		dispatch(deleteAccountSuccess());
		navigate(LOGIN_PAGE);
	} catch (err) {
		dispatch(deleteAccountFailed());
		alert(err.response.data.error.message);
	}
};

export const editUser = async (
	userId,
	payload,
	dispatch,
	navigate,
	setErrMsg
) => {
	try {
		await api.patch(getUserUrlWithId(userId), payload);

		localStorage.clear();

		dispatch(editProfileSuccess());
		alert("Edit profile successfully!");
		navigate(LOGIN_PAGE);
	} catch (err) {
		dispatch(editProfileFailed());
		setErrMsg(err.response.data.error.message);
	}
};

export const addTodo = async (todoInfo, dispatch) => {
	try {
		await api.post(API_TASKS_URL, todoInfo);

		dispatch(addTodoSuccess(todoInfo));
	} catch (err) {
		alert(err);
	}
};
