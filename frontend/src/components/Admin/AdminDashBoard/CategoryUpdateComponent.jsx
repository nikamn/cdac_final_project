import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoriesService from "../../../services/CategoriesService";

const CategoryUpdateComponent = () => {
  const location = useLocation();

  const [categoryDetails, setCategoryDetails] = useState({
    id: "",
    categoryName: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setCategoryDetails({ ...location.state.editCategory });
    console.log(categoryDetails);
  }, []);

  const handleChange = (event) => {
    let {name, value} = event.target    
    setCategoryDetails({ ...categoryDetails, [name]: value });
    console.log("---handlechange---" + JSON.stringify(categoryDetails));
  };

  const updateCategory = (e) => {
    e.preventDefault();
    console.log("---updateCategory---" + categoryDetails);
    CategoriesService.updateCategory(categoryDetails)
      .then((response) => {
        console.log(response);
        navigate("/admin/categoryDashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className=" mx-auto mt-5">
        <div className="mt-5">
          <label htmlFor="update_c_id" className="form-label">
            Category Id
          </label>
          <input
            type="text"
            name="id"
            id="update_c_id"
            readOnly
            value={categoryDetails.id}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="update_c_name" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            name="categoryName"
            id="üpdate_c_name"
            onChange={handleChange}
            value={categoryDetails.categoryName}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="update_c_description" className="form-label">
            Category Description
          </label>
          <input
            type="text"
            name="description"
            id="update_c_description"
            onChange={handleChange}
            value={categoryDetails.description}
          />
        </div>
        <div className="mt-5">
          <button
            type="btn"
            className="mt-5 btn btn-outline-secondary"
            onClick={updateCategory}
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryUpdateComponent;
