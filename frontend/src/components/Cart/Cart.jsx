import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import PropTypes from "prop-types";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded-md h-24"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <button
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
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
