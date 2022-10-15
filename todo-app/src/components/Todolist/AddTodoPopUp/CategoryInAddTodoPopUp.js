import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	handleSelectCategories,
	twoWayBindingChecked,
} from "../../../helper/helper";
import { getCategories } from "../../../redux/categoriesSlice";
import { CategoriesContext } from "./AddTodoPopUp";

export default function CategoryInAddTodoPopUp() {
	const dispatch = useDispatch();

	const categories = useSelector((state) => state.category.categories);
	const [categoriesSelected, setCategoriesSelected] =
		useContext(CategoriesContext);

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return (
		<div className="category">
			<div className="category__title">
				<i className="fa-solid fa-filter"></i> Category
			</div>
			<div className="selection__container">
				{categories.map((category) => (
					<div key={category.id} className="selection">
						<input
							className="checkbox"
							type="checkbox"
							onChange={() =>
								handleSelectCategories(
									category.id,
									category.name,
									categoriesSelected,
									setCategoriesSelected
								)
							}
							checked={twoWayBindingChecked(categoriesSelected, category.id)}
						/>{" "}
						{category.name}
					</div>
				))}
			</div>
		</div>
	);
}
