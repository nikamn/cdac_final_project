// Categories.js
import "./Categories.css";
import CategoryCard from "./CategoryCard";
import categoriesData from "../../data/categoriesData";
// ... import other images ...

const Categories = () => {
  return (
    <section className="categories-section">
      <h2 className="heading-section">Featured Categories</h2>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <CategoryCard
            key={category.id}
            categoryName={category.category_name}
            description={category.description}
            image={category.imageUrl}
            classname={"product" + category.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
