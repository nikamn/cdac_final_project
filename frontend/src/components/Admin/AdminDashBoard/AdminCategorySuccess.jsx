import { useEffect, useState } from "react";
import CategoriesService from "../../../services/CategoriesService";
import {Link, Outlet } from "react-router-dom";

const AdminCategorySuccess = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [displayCategories, setDisplayCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = () => {
    CategoriesService.getAllCategories()
      .then((result) => {
        console.log("View All Categories: ", result);
        setAllCategories([...result.data]);
        setDisplayCategories([...result.data]);
      })
      .catch((err) => {
        console.log("Error in view fetch all " + err);
        throw err;
      });
  };

  useEffect(() => {
    if (searchText !== "") {
      let searchedCategory = allCategories.filter(
        (c) =>
          c.categoryName.includes(searchText) ||
          c.categoryName.toLowerCase().includes(searchText)
      );
      setDisplayCategories([...searchedCategory]);
    } else {
      if (allCategories.length > 0) {
        setDisplayCategories([...allCategories]);
      }
    }
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const deleteCategory = (categoryId) => {
    CategoriesService.deleteCategoryById(categoryId)
      .then((data) => {
        console.log(data);
        fetchAllCategories();
      })
      .catch((err) => {
        console.log("Error in view all button " + err);
        throw err;
      });
  };

  return (
    <div>
      <h1 className="text-center mb-3 ">Welcome to Category Management</h1>

      <div className="container">
        <form>
          <div className="w-3/5 mx-auto">
            <div>
              <label htmlFor="searchCat"> Search Category</label>
            </div>
            <div>
              <input
                type="text"
                name="input_search"
                id="searchCat"
                value={searchText}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th scope="col">Category Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Description</th>
            <th colSpan={2}>Category Action</th>
          </tr>
        </thead>

        <tbody>
          {displayCategories.map((category) => (
            <tr className="text-center" key={category.id}>
              <th>{category.id}</th>
              <td>{category.categoryName}</td>
              <td>{category.description}</td>
              <td>
                <Link
                  to={`/admin/editCategory/${category.id}`}
                  state={{editCategory: category }}
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
                    deleteCategory(category.id);
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

export default AdminCategorySuccess;
