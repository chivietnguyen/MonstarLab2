import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "authentication",
	initialState: {
		register: {
			error: false,
			success: false,
		},
		login: {
			currentUser: null,
			error: false,
			success: false,
		},
	},
	reducers: {
		registerSuccess: (state) => {
			state.register.error = false;
			state.register.success = true;
		},
		registerFailed: (state) => {
			state.register.error = true;
			state.register.success = false;
		},

		loginSuccess: (state, action) => {
			state.login.currentUser = action.payload;
			state.login.success = true;
			state.login.error = false;
		},
		loginFailed: (state) => {
			state.login.success = false;
			state.login.error = true;
		},
	},
});

export const { registerSuccess, registerFailed, loginSuccess, loginFailed } =
	authSlice.actions;
export default authSlice.reducer;
