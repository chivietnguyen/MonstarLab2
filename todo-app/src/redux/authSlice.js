import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "authentication",
	initialState: {
		register: {
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
	},
});

console.log(authSlice.actions);
export const { registerSuccess, registerFailed } = authSlice.actions;
console.log(registerSuccess);
console.log(registerFailed);
export default authSlice.reducer;
