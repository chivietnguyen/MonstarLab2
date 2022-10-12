import { api } from "../api/axios";
import { AUTH_REGISTER_URL, LOGIN_PAGE } from "../path/path";
import { registerSuccess, registerFailed } from "./authSlice";

export const registerUser = async (user, dispatch, navigate, setErrMsg) => {
	try {
		await api.post(AUTH_REGISTER_URL, user);
		dispatch(registerSuccess());
		console.log("???");
		alert("Register Successfully!");
		navigate(LOGIN_PAGE);
	} catch (err) {
		dispatch(registerFailed());
		setErrMsg(err.response.data.error.message);
	}
};
