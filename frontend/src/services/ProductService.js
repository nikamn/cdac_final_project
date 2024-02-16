import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "../api/axios";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("userData")).token;
};

const getAllProducts = async () => {
  return axios
    .get("/products")
    .then((response) => {
      console.log(
        "Respose from getAllProducts --->" + JSON.stringify(response.data)
      );
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const getProductById = async (productId) => {
  return axios
    .get("/products/" + productId)
    .then((response) => {
      console.log(
        "Respose from getProductById --->" + JSON.stringify(response.data)
      );
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const addNewProduct = async (product) => {
  return axios
    .post("/products", { product })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const updateProductById = async (product) => {
  return axios
    .put("/products/" + product.productId, { product })
    .then((response) => {
      console.log("Respose from updateProductById --->" + response);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const deleteProductById = async (productId) => {
  const token = getToken();
  return axios
    .delete("/products/" + productId, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(
        "Respose from deleteProductById --->" + JSON.stringify(response)
      );
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const ProductService = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
};

export default ProductService;
