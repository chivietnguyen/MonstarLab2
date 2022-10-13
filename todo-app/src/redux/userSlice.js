import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		deleteAccount: {
			error: false,
			success: false,
		},

		editProfile: {
			error: false,
			success: true,
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
		editProfileSuccess: (state) => {
			state.editProfile.error = false;
			state.editProfile.success = true;
		},
		editProfileFailed: (state) => {
			state.editProfile.error = true;
			state.editProfile.success = false;
		},
	},
});

export const {
	deleteAccountSuccess,
	deleteAccountFailed,
	editProfileSuccess,
	editProfileFailed,
} = userSlice.actions;

export default userSlice.reducer;
