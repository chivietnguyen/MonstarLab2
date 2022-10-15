import React from "react";
import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoFooter from "./TodoFooter/TodoFooter";
import AddTodoPopUp from "./AddTodoPopUp/AddTodoPopUp";

import styles from "./Todolist.module.css";
import { useSelector } from "react-redux";

export default function Todolist() {
	const isShowAddTodoPopUp = useSelector(
		(state) => state.todos.showAddTodoPopUp.display
	);

	return (
		<div className={styles.container}>
			<TodoHeader />

			{isShowAddTodoPopUp && <AddTodoPopUp />}
			<TodoBody />
			<TodoFooter />
		</div>
	);
}
