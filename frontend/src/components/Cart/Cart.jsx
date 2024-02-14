import './Cart.css';

function Cart() {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    // Add more items as needed
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            {/* Add options for updating quantity, removing item, etc. */}
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Subtotal: ${subtotal}</h3>
        {/* Add checkout button and other options */}
      </div>
    </div>
  );
}

export default Cart;
