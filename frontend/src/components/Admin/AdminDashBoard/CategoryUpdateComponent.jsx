import { useLocation } from "react-router-dom";

const CategoryUpdateComponent = ()=>
{
    const location = useLocation();

    const [categoryDetails, setCategoryDetails] = useState({
        id: "",
        categoryName: "",
        description: "",
      });

    return(
        <div>

        </div>
    )
}

export default CategoryUpdateComponent