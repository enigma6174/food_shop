import "./category-item.styles.scss";

const CategoryItemComponent = ({ category }) => {
	const { url, title } = category;
	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${url})` }}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now!</p>
			</div>
		</div>
	);
};

export default CategoryItemComponent;
