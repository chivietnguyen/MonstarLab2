import React from "react";
import CategoryInTodoCard from "./CategoryInTodoCard";

import styles from "./TodoBody.module.css";

export default function TodoBody() {
	return (
		<div className={styles.container}>
			<div className={styles.listItems}>
				<div className={styles.todoCard}>
					<div className={styles.cardHeader}>
						<p className={styles.cardTitle}>Cooking</p>
						<i className="icon fa-solid fa-pen"></i>
					</div>

					<div className={styles.cardBody}>
						<div className={styles.categoryField}>
							<div className={styles.categoryContainer}>
								<div className={styles.category}>Life</div>
							</div>
						</div>

						<div className={styles.date}>
							<p>Start Date: </p>
							<p>Finished Date: </p>
						</div>

						<div className={styles.cardFooter}>
							<i className="icon--trash fa-solid fa-trash-can"></i>
							<input className={styles.cardCheckbox} type="checkbox" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
