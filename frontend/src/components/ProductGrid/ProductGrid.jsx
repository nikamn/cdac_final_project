import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    axios.get('your-backend-url/products')
      .then(response => {
        setProducts(response.data); // Assuming the response contains an array of products
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div className="product-grid">
      <h2>Products</h2>
      <div className="grid-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
