import { useLocation } from "react-router-dom";



const ProductViewComponent = () => {

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


      useEffect(() => {
        setProductDetails({ ...location.state.viewProduct });
      }, []);


      



  return (
   <div></div>
  );
};

export default ProductViewComponent;
