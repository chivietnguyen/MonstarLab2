import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api/axios";
import { API_TASKS_URL, getTaskUrlWithId } from "../path/path";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
	return api.get(API_TASKS_URL).then((res) => res.data.data);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
	await api.delete(getTaskUrlWithId(id));
});

export const addTodo = createAsyncThunk("todos/addTodo", async (payload) => {
	await api.post(API_TASKS_URL, payload);
});

export const todosSlice = createSlice({
	name: "todos",
	initialState: {
		showAddTodoPopUp: {
			display: false,
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

		[deleteTodo.pending]: (state) => {
			state.todolist.status = "loading";
		},
		[deleteTodo.fulfilled]: (state) => {
			state.todolist.status = "success";
		},
		[deleteTodo.rejected]: (state) => {
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
