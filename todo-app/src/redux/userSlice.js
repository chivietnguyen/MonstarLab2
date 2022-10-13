import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		deleteAccount: {
			error: false,
			success: false,
		},
	},
	reducers: {
		deleteAccountSuccess: (state) => {
			state.deleteAccount.error = false;
			state.deleteAccount.success = true;
		},
		deleteAccountFailed: (state) => {
			state.deleteAccount.error = true;
			state.deleteAccount.success = false;
		},
	},
});

export const { deleteAccountSuccess, deleteAccountFailed } = userSlice.actions;

export default userSlice.reducer;
