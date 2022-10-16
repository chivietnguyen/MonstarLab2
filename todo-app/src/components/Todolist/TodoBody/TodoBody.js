import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../../redux/todosSlice";

import styles from "./TodoBody.module.css";

export default function TodoBody() {
	const todos = useSelector((state) => state.todos.todolist.todos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	console.log(todos);

	return (
		<div className={styles.container}>
			<div className={styles.listItems}>
				{todos.map((todo) => (
					<div key={todo.id} className={styles.todoCard}>
						<div className={styles.cardHeader}>
							<p className={styles.cardTitle}>{todo.title}</p>
							<i className="icon fa-solid fa-pen"></i>
						</div>

						<div className={styles.cardBody}>
							<div className={styles.categoryField}>
								<div className={styles.categoryContainer}>
									<div className={styles.category}>Life</div>
								</div>
							</div>

							<div className={styles.date}>
								<p>Start Date: {todo.createdAt}</p>
								<p>Finished Date: {todo.completedAt} </p>
							</div>

							<div className={styles.cardFooter}>
								<i className="icon--trash fa-solid fa-trash-can"></i>
								<input
									className={styles.cardCheckbox}
									type="checkbox"
									checked={todo.status === "COMPLETED" ? true : false}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
