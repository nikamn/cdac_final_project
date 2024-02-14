import "./Wishlist.css";

function Wishlist() {
  // Sample wishlist data
  const wishlistItems = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    // Add more items as needed
  ];

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
            </div>
            {/* Add options for managing wishlist items */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
