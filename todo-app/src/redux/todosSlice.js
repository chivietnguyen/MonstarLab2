import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
	name: "todo",
	initialState: {
		showAddTodoPopUp: {
			display: false,
		},
		addTodo: {
			todoInfo: {},
			success: false,
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
});

export const {
	showAddTodoPopUp,
	hideAddTodoPopUp,
	addTodoSuccess,
	addTodoFailed,
} = todosSlice.actions;
export default todosSlice.reducer;
