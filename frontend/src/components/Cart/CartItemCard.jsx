/* eslint-disable react/prop-types */

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartItemCard = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="w-full h-auto flex flex-col justify-evenly border border-b-2 rounded-lg shadow-md bg-white">
      <div className="w-full flex gap-4 p-4 h-[100px] md:h-auto">
        <img
          src={item.imageUrl}
          alt={item.productName}
          className="object-contain rounded-md max-w-[150px] w-1/2"
        />
        <div className="flex flex-col justify-start px-2 w-1/2 md:h-[100px] overflow-hidden">
          <h1 className="text-2xl md:text-lg font-bold py-2">{item.productName}</h1>
          <p className="text-2xl md:text-lg text-slate-500">{item.price}</p>
        </div>
      </div>

      <div className="flex gap-4 border w-full p-4 justify-between">
        <div className="flex gap-3">
          <button
            className="px-2 py-1 w-auto bg-gray-800 text-white text-base  rounded flex justify-center items-center"
            onClick={() => {
              addToCart(item);
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="text-2xl md:text-lg" />
          </button>
          <p className="text-4xl md:text-2xl font-normal">{item.quantity}</p>
          <button
            className="px-2 py-1 w-auto bg-gray-800 text-white text-base  rounded flex justify-center items-center"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            <FontAwesomeIcon icon={faMinus} className="text-2xl md:text-2xl" />
          </button>
        </div>
        <p className="self-center text-3xl font-semibold md:text-2xl">
          $ {item.quantity * item.price}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
