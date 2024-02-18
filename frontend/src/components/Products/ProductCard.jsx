/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { thumbnail, title, description, price } = product;

  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-10">
      <img
        src={thumbnail}
        alt={title}
        className="rounded-md w-full h-48 object-cover"
      />
      <div className="mt-4">
        <h1 className="p-2 text-xl text-center capitalize font-bold">{title}</h1>
        <p className="mt-2 text-gray-600 text-sm">
          {description.slice(0, 80)}
          {product.description.length > 80 && "..."}
        </p>
        <p className="mt-2 text-gray-600">${price}</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
