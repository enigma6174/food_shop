import CategoryItemComponent from "../category-item/category-item.component";
import { categories } from "./categories";
import "./categories.styles.scss";

const CategoriesComponent = () => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CategoryItemComponent key={category.id} category={category} />
			))}
		</div>
	);
};

export default CategoriesComponent;
