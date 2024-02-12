/* eslint-disable react/prop-types */
import "./CategoryCard.css";

const CategoryCard = ({ categoryName, description, image, classname }) => {
  return (
    <div className={"category-card " + classname}>
      <img src={image} alt={categoryName} />
      <h2>{categoryName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CategoryCard;
