import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import todosReducer from "./todosSlice";
import categoryReducer from "./categoriesSlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		todos: todosReducer,
		category: categoryReducer,
	},
});
