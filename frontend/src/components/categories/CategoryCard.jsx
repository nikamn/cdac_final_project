/* eslint-disable react/prop-types */
import "./CategoryCard.css";

const CategoryCard = ({ categoryName, description, image }) => {
  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow category-card">
      <img
        className="rounded-t-lg w-full h-2/5 drop-shadow-sm mb-2"
        src={image}
        alt={categoryName}
      />

      <div className="px-4 py-2">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-[#023F3A]">
          {categoryName}
        </h5>

        <p className=" pt-2 font-medium text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
