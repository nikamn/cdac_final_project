import axios from "../api/axios";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("userData")).token;
};

const getAllCategories = async () => {
    return axios
      .get("/categories")
      .then((response) => {
        console.log(
          "Respose from getAllCategories --->" + JSON.stringify(response.data)
        );
        return response;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const getCategoryById = async(categoryId) =>{
    return axios
    .get("/categories/" + categoryId)
    .then((response) => {
      console.log(
        "Respose from getCategoryById --->" + JSON.stringify(response.data)
      );
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }

  const addNewCategory = async(newCategory)=>{
    return axios
    .post("/categories", { newCategory })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  }

  const updateCategory = async (category) => {
    const token = getToken();
    return axios
      .put("/categories/" + category.id, category, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Respose from updateCategory --->" + response);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };

  const deleteCategoryById = async (categoryId) => {
    const token = getToken();
    return axios
      .delete("/categories/" + categoryId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(
          "Respose from deletecategoryById --->" + JSON.stringify(response)
        );
        return response;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  };


  const CategoriesService = {getAllCategories, getCategoryById, addNewCategory, updateCategory, deleteCategoryById};

  export default CategoriesService;