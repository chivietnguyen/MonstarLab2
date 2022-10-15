import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/axios";
import { API_CATEGORIES_URL } from "../path/path";

export const getCategories = createAsyncThunk(
	"categories/getCategories",
	async () => {
		return api.get(API_CATEGORIES_URL).then((res) => res.data.data);
	}
);

const categoriesSlice = createSlice({
	name: "categories",
	initialState: {
		categories: [],
		state: null,
	},
	extraReducers: {
		[getCategories.pending]: (state) => {
			state.status = "loading";
		},
		[getCategories.fulfilled]: (state, action) => {
			state.categories = action.payload;
			state.status = "success";
		},
		[getCategories.rejected]: (state) => {
			state.status = "failed";
		},
	},
});

export default categoriesSlice.reducer;
