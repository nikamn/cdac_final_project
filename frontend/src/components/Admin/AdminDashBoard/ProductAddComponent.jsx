import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";

const ProductAddComponent = () => {
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    id: "",
    productName: "",
    price: "",
    quantity: "",
    categoryId: "",
    imageUrl: "",
    description: ""
  });

  const handlechange = async(event) => {
    let { name, value } = event.target;
    setProductDetails({ ...productDetails, [name]: value });
  };


  const addproduct = (event) => {
    event.preventDefault();
    console.log("Add product invoked")
    console.log("Product Data-->", productDetails);
    ProductService.addNewProduct(productDetails)
    .then((response) => {
      console.log(response);
      
    })
    .catch((error) => {
      console.log(error);
    });
    
    setProductDetails({id: "",
    productName: "",
    price: "",
    quantity: "",
    categoryId: "",
    imageUrl: "",
    description: ""})
    navigate("/admin/productDashboard");
  };


  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={addproduct} >
        <div >
          <label
            htmlFor="add_productName"
            
          >
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            id="add_productName"
            value={productDetails.productName}
            placeholder=" "
            required
            onChange={handlechange}
          />
        </div>
        <div >
          <label
            htmlFor="add_price"
            
          >
            Price
          </label>
          <input
            type="text"
            step={0.01}
            name="price"
            id="add_price"
            value={productDetails.price}
            placeholder=" "
            required
            onChange={handlechange}
          />
        </div>
        <div >
          <label
            htmlFor="add_quantity"
            
          >
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            id="add_quantity"
            value={productDetails.quantity}
            placeholder=" "
            required
            onChange={handlechange}
          />
        </div>
        <div >
          <div >
            <label
              htmlFor="add_categoryId"
              
            >
              Category Id
            </label>
            <input
              type="text"
              name="categoryId"
              id="add_categoryId"
              value={productDetails.categoryId}
              placeholder=" "
              required
              onChange={handlechange}
            />
          </div>
          <div >
            <label
              htmlFor="add_imageUrl"
              
            >
              Image Url
            </label>
            <input
              type="text"
              name="imageUrl"
              id="add_imageUrl"
              value={productDetails.imageUrl}
              placeholder=" "
              required
              onChange={handlechange}
            />
          </div>
        </div>
        <div >
            <label
              htmlFor="add_description"
              
            >
              Product Description
            </label>
          <div >
            <input
              type="text"
              name="description"
              id="add_description"
              value={productDetails.description}
              placeholder=" "
              required
              onChange={handlechange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn mt-2 btn-outline-primary"
        >
          Add Product
        </button>
      </form>
      F
    </div>
  );
};

export default ProductAddComponent;
