import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/axios";
import { API_TASKS_URL } from "../path/path";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
	return api.get(API_TASKS_URL).then((res) => res.data.data);
});

export const todosSlice = createSlice({
	name: "todos",
	initialState: {
		showAddTodoPopUp: {
			display: false,
		},
		addTodo: {
			todoInfo: {},
			success: false,
		},
		todolist: {
			todos: [],
			status: null,
		},
	},
	reducers: {
		showAddTodoPopUp: (state) => {
			state.showAddTodoPopUp.display = true;
		},
		hideAddTodoPopUp: (state) => {
			state.showAddTodoPopUp.display = false;
		},
		addTodoSuccess: (state, action) => {
			state.addTodo.todoInfo = action.payload;
			state.addTodo.success = true;
		},
		addTodoFailed: (state) => {
			state.addTodo.success = false;
		},
	},
	extraReducers: {
		[getTodos.pending]: (state) => {
			state.todolist.status = "loading";
		},
		[getTodos.fulfilled]: (state, action) => {
			state.todolist.todos = action.payload;
			state.todolist.status = "success";
		},
		[getTodos.rejected]: (state) => {
			state.todolist.status = "failed";
		},
	},
});

export const {
	showAddTodoPopUp,
	hideAddTodoPopUp,
	addTodoSuccess,
	addTodoFailed,
} = todosSlice.actions;
export default todosSlice.reducer;
