import { Link } from "react-router-dom";
import pageNotFound from "../../assets/pagenotfound.jpg";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={pageNotFound} className="w-full max-w-96" />
      <p className="text-center text-4xl font-bold mt-10">
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
