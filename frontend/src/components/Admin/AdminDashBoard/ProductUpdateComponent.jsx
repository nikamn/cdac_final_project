import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";

const ProductUpdateComponent = () => {
  const location = useLocation();

  const [productDetails, setProductDetails] = useState({
    id: "",
    productName: "",
    price: "",
    quantity: "",
    categoryId: "",
    imageUrl: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setProductDetails({ ...location.state.editProduct });
  }, []);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const updateProduct = () => {
    ProductService.updateProduct(productDetails)
      .then((response) => {
        console.log(response);
        navigate("/admin/productDashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="update_id" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            name="id"
            id="update_id"
            readOnly
            value={productDetails.id}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            id="update_productName"
            onChange={handleChange}
            value={productDetails.productName}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_price" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="update_price"
            onChange={handleChange}
            value={productDetails.price}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_quantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            id="update_quantity"
            onChange={handleChange}
            value={productDetails.quantity}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_categoryId" className="form-label">
            Category Id
          </label>
          <input
            type="text"
            name="categoryId"
            id="update_categoryId"
            onChange={handleChange}
            value={productDetails.categoryId}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_imageUrl" className="form-label">
            Product Image
          </label>
          <input
            type="text"
            name="imageUrl"
            id="update_imageUrl"
            onChange={handleChange}
            value={productDetails.imageUrl}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="update_description" className="form-label">
            Product description
          </label>
          <input
            type="text"
            name="description"
            id="update_description"
            onChange={handleChange}
            value={productDetails.description}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={updateProduct}
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpdateComponent;
