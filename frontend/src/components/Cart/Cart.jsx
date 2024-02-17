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
      <div
        className={
          !isCartActive
            ? "w-full flex justify-between items-center sm:justify-between md:justify-between"
            : "m-4"
        }
      >
        <h1 className={!isCartActive ? "text-2xl pe-2" : "text-5xl font-bold"}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={!isCartActive ? "text-2xl pe-2" : "text-4xl pe-2"}
          />
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

      <div className=" w-auto flex flex-col gap-4 md:max-h-[60vh] p-4 md:overflow-y-scroll ">
        {cartItems.map((item) => (
          <CartItemCard item={item} key={item.id} />
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div className=" flex justify-center items-center md:w-full lg:flex-col lg:gap-4 lg:items-end max-w-96 mt-3">
          <h1
            className={
              !isCartActive
                ? "md:w-1/3 max-w-[200px] text-2xl sm:text-base lg:text-2xl font-bold"
                : "md:w-1/3  font-bold text-3xl"
            }
          >
            Total: ${getCartTotal()}
          </h1>
          <div
            className="flex w-full justify-center gap-1
           md:justify-around lg:justify-evenly md:gap-2"
          >
            <button
              className="px-3 py-3 w-auto md:w-1/3 bg-red-600 text-white text-base font-bold uppercase rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
            {!isCartActive ? (
              <button
                className="px-3 py-3 w-auto md:w-1/3 bg-amber-500 text-white text-base  font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
                onClick={() => navigate("/cart")}
              >
                place order
              </button>
            ) : (
              <button
                className="px-3 py-3 w-auto md:2-1/3 bg-amber-500 text-white text-lg sm:text-base  font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
                onClick={() => navigate("/checkout")}
              >
                check out
              </button>
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Your cart is empty</h1>
      )}
    </>
  );
}
