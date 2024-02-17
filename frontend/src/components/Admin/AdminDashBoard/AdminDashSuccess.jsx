import ProductService from "../../../services/ProductService";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashSuccess = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchAllFromDatabase = () => {
    ProductService.getAllProducts()
      .then((result) => {
        console.log("View All: ", result);
        setAllProducts([...result.data]);
      })
      .catch((err) => {
        console.log("Error in view fetch all " + err);
        throw err;
      });
  };

  //Button action to show all products
  const viewAll = () => {
    fetchAllFromDatabase();
  };

  //Button action to show Single Product
  const viewOne = () => {
    ProductService.getProductById(1);
  };

  const deleteProduct = (productId) => {
    ProductService.deleteProductById(productId)
      .then((data) => {
        console.log(data);
        fetchAllFromDatabase();
      })
      .catch((err) => {
        console.log("Error in view all button " + err);
        throw err;
      });
  };

  return (
    <div>
      <h1 className="text-center mb-3">Welcome to Project Management</h1>

      <button
        type="button"
        name="btn_get_all"
        id="get_all"
        className="btn btn-info mb-3"
        onClick={viewAll}
      >
        Get all products
      </button>

      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Product Category Id</th>
            <th scope="col">Product Image URL</th>
            <th scope="col">Product Description</th>
            <th colSpan={3}>Product Action</th>
          </tr>
        </thead>

        <tbody>
          {allproducts.map((product) => (
            <tr className="text-center" key={product.id}>
              <th>{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.categoryId}</td>
              <td>{product.imageUrl}</td>
              <td>{product.description}</td>
              <td>
                <button
                  type="button"
                  id="view"
                  name="btn_view"
                  className="btn btn-outline-success"
                >
                  View
                </button>
              </td>
              <td>
                <Link
                  to={`/admin/editProduct/${product.id}`}
                  state={{ editProduct: product }}
                >
                  <button
                    type="button"
                    id="update"
                    name="btn_update"
                    className="btn btn-outline-info"
                  >
                    Update
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  id="delete"
                  name="btn_delete"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Outlet></Outlet>
    </div>
  );
};

export default AdminDashSuccess;
