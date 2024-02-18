// import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
// import Signin from "./components/Signin/Signin";
import Signin from "./components/Signin/Signin2";
import Signup from "./components/Signup/Signup";

import Wishlist from "./components/Wishlist/Wishlist";

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import BlogPage from "./pages/BlogPage/BlogPage";

import ToolsAndEquipments from "./pages/toolsEquipments/ToolsAndEquipments";

import "./App.css";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Products from "./components/Products/Products";
import ProductUpdateComponent from "./components/Admin/AdminDashBoard/ProductUpdateComponent";
import ProductViewComponent from "./components/Admin/AdminDashBoard/ProductViewComponent";
import AdminHome from "./components/Admin/AdminHome";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import AdminDashSuccess from "./components/Admin/AdminDashBoard/AdminDashSuccess";
import { AdminDashFailure } from "./components/Admin/AdminDashBoard/AdminDashFailure";
import AuthService from "./services/AuthService";
import AdminCategorySuccess from "./components/Admin/AdminDashBoard/AdminCategorySuccess";
import AdminCategoryFail from "./components/Admin/AdminDashBoard/AdminCategoryFail";
import CategoryUpdateComponent from "./components/Admin/AdminDashBoard/CategoryUpdateComponent";
import Checkout from "./components/Checkout/Checkout";
import BlogPost from "./components/Blog/BlogPost";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductAddComponent from "./components/Admin/AdminDashBoard/ProductAddComponent";

function App() {
  const user = AuthService.getUser();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blog" element={<BlogPage />} />

        <Route path="blog/post/:id" element={<BlogPost />} />

        <Route path="tools" element={<ToolsAndEquipments />} />
        <Route path="cart" element={<PlaceOrder />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="products" element={<Products />} />

        {user && (
          <Route path="admin" element={<AdminHome />}>
            {/*Product Management Routes*/}
            <Route
              path="productDashboard"
              element={
                user.role === "ROLE_ADMIN" ? (
                  <AdminDashSuccess />
                ) : (
                  <AdminDashFailure />
                )
              }
            />
            <Route
              path="editProduct/:id"
              element={<ProductUpdateComponent />}
            />
            <Route path="addProduct" element={<ProductAddComponent></ProductAddComponent>} />
            <Route path="viewProduct/:id" element={<ProductViewComponent />} />

            {/*Category Management Routes*/}
            <Route
              path="categoryDashboard"
              element={
                user.role === "ROLE_ADMIN" ? (
                  <AdminCategorySuccess />
                ) : (
                  <AdminCategoryFail />
                )
              }
            />
            <Route
              path="editCategory/:id"
              element={<CategoryUpdateComponent />}
            />
          </Route>
        )}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
