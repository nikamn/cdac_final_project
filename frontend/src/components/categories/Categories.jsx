// Categories.js

import CategoryCard from "./CategoryCard";
import categoriesData from "../../data/categoriesData";

import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories-section mt-28 sm:mt-10 md:mt-0">
      <h2 className="heading-section">Featured Categories</h2>
      <div className="flex flex-wrap justify-evenly mt-10 gap-8">
        {categoriesData.map((category) => (
          <CategoryCard
            key={category.id}
            categoryName={category.category_name}
            description={category.description}
            image={category.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
