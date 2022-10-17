import React, { useState, createContext } from "react";

import CategoryInAddTodoPopUp from "./CategoryInAddTodoPopUp";

import styles from "./AddTodoPopUp.module.css";
import { useDispatch } from "react-redux";
import { addTodo, getTodos, hideAddTodoPopUp } from "../../../redux/todosSlice";
import { getCategoryIdsArr } from "../../../helper/helper";

export const CategoriesContext = createContext();

export default function AddTodoPopUp() {
	const [title, setTitle] = useState();
	const [categoriesSelected, setCategoriesSelected] = useState([]);
	const dispatch = useDispatch();

	const handleHideAddTodoPopUp = () => {
		dispatch(hideAddTodoPopUp());
	};

	const handleAddTask = async (e) => {
		e.preventDefault();

		try {
			const payload = {
				title,
				categoryIds: getCategoryIdsArr(categoriesSelected),
			};

			await dispatch(addTodo(payload));
			dispatch(getTodos());
			dispatch(hideAddTodoPopUp());
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={styles.wrapper}>
			<form className={styles.container}>
				<input
					required
					className={styles.input}
					type="text"
					placeholder="Enter new task ..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<div className={styles.category}>
					<CategoriesContext.Provider
						value={[categoriesSelected, setCategoriesSelected]}
					>
						<CategoryInAddTodoPopUp />

						<div className={styles.filterItemContainer}>
							{categoriesSelected.map((item) => (
								<div key={item.id} className={styles.filterItem}>
									{item.name} <i className="fa-solid fa-x"></i>
								</div>
							))}
						</div>
					</CategoriesContext.Provider>
				</div>

				<div className={styles.footer}>
					<button
						className={styles.button}
						type="button"
						onClick={handleHideAddTodoPopUp}
					>
						Cancel
					</button>
					<button
						className={`${styles.button} ${styles.buttonAdd}`}
						type="submit"
						onClick={handleAddTask}
					>
						Add task
					</button>
				</div>
			</form>
		</div>
	);
}
