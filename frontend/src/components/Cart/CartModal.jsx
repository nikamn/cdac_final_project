/* eslint-disable react/prop-types */
import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../contexts/CartContext";

function CartModal() {
  const { showModal } = useContext(CartContext);

  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/1 sm:left-2/4 md:left-2/3 lg:left-3/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm overflow-scroll">
        <Cart />
      </div>
    )
  );
}

export default CartModal;
