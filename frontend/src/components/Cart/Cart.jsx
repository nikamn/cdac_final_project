/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import CartItemCard from "./CartItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useMatch, useNavigate } from "react-router-dom";
export default function Cart() {
  const isCartActive = useMatch("/cart");
  const navigate = useNavigate();
  const { toggle, cartItems, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <>
      <div className="w-full flex justify-between items-center sm:justify-between md:justify-between">
        <h1 className="text-2xl font-bold">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl pe-2" />
          Cart
        </h1>
        {!isCartActive && (
          <div className=" right-16 top-10">
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faRemove} className="text-2xl" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className=" w-full flex gap-4 justify-center items-center ">
          <h1 className="w-auto text-2xl sm:text-base lg:text-2xl font-bold">
            Total: ${getCartTotal()}
          </h1>
          <button
            className="px-3 py-3 w-auto bg-red-600 text-white text-lg sm:text-base font-bold uppercase rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
            onClick={() => {
              clearCart();
            }}
          >
            Clear cart
          </button>
          {!isCartActive ? (
            <button
              className="mt-2 px-3 py-3 w-auto bg-amber-500 text-white text-lg sm:text-base  font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
              onClick={() => navigate("/cart")}
            >
              place order
            </button>
          ) : (
            <button
              className="mt-2 px-3 py-3 w-auto bg-amber-500 text-white text-lg sm:text-base  font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
              onClick={() => navigate("/checkout")}
            >
              check out
            </button>
          )}
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </>
  );
}
