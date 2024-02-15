import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import PropTypes from "prop-types";
import CartItemCard from "./CartItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function Cart({ showModal, toggle }) {
  const navigate = useNavigate();
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);

  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/1 sm:left-2/4 md:left-2/3 lg:left-3/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm overflow-scroll">
        <div className="w-full flex justify-between items-center sm:justify-between md:justify-between">
          <h1 className="text-2xl font-bold">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl pe-2" />
            Cart
          </h1>
          <div className=" right-16 top-10">
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={toggle}
            >
              <FontAwesomeIcon icon={faRemove} className="text-2xl" />
            </button>
          </div>
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
            <button
              className="px-3 py-3 w-auto bg-amber-500 text-white text-lg sm:text-base  font-bold uppercase rounded hover:bg-amber-700 focus:outline-none focus:bg-amber-700"
              onClick={() => {
                navigate("/cart");
              }}
            >
              place order
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};

// import './Cart.css';

// function Cart() {
//   // Sample cart data
//   const cartItems = [
//     { id: 1, name: 'Product 1', price: 10, quantity: 2 },
//     { id: 2, name: 'Product 2', price: 15, quantity: 1 },
//     // Add more items as needed
//   ];

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="cart-page">
//       <h2>Shopping Cart</h2>
//       <div className="cart-items">
//         {cartItems.map(item => (
//           <div key={item.id} className="cart-item">
//             <div className="item-details">
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>
//             {/* Add options for updating quantity, removing item, etc. */}
//           </div>
//         ))}
//       </div>
//       <div className="cart-total">
//         <h3>Subtotal: ${subtotal}</h3>
//         {/* Add checkout button and other options */}
//       </div>
//     </div>
//   );
// }

// export default Cart;
