import axios from "../api/axios";

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


  const CategoriesService = {getAllCategories};

  export default CategoriesService;