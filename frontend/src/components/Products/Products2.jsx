import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import CartModal from "../Cart/CartModal";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const Products = () => {
  // const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { showModal, toggle, cartItems, addToCart } = useContext(CartContext);
  const [user, setUser] = useState(AuthService.getUser());
  const navigate = useNavigate();

  // const toggle = () => {
  //   setshowModal(!showModal);
  // };

  async function getProducts() {
    const response = await ProductService.getAllProducts();
    console.log(response.data);
    const data = response.data;
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
          Shop
        </h1>
        {!showModal && (
          <button
            className="px-4 py-2 md:px-8 md:py-3 w-auto md:text-xl bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Cart ({cartItems.length})
          </button>
        )}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg px-10 py-10"
          >
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="rounded-md h-48"
            />
            <div className="mt-4">
              <h1 className="text-lg uppercase font-bold">
                {product.productName}
              </h1>
              <p className="mt-2 text-gray-600 text-sm">
                {product.description.slice(0, 40)}...
              </p>
              <p className="mt-2 text-gray-600">${product.price}</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  if (user) {
                    addToCart(product);
                  } else {
                    navigate("/signin");
                  }
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <CartModal />
    </div>
  );
};

export default Products;
