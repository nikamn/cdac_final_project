// import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

import Wishlist from "./components/Wishlist/Wishlist";

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ToolsAndEquipments from "./pages/toolsEquipments/ToolsAndEquipments";

import "./App.css";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Products from "./components/Products/Products";
import ProductUpdateComponent from "./components/Admin/AdminDashBoard/ProductUpdateComponent";
import AdminHome from "./components/Admin/AdminHome";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import AdminDashSuccess from "./components/Admin/AdminDashBoard/AdminDashSuccess";
import { AdminDashFailure } from "./components/Admin/AdminDashBoard/AdminDashFailure";
import AuthService from "./services/AuthService";

function App() {
  const user = AuthService.getUser();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="tools" element={<ToolsAndEquipments />} />
        <Route path="cart" element={<PlaceOrder />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="products" element={<Products />} />

        {user && (
          <Route path="admin" element={<AdminHome />}>
            <Route
              path="dashboard"
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
          </Route>
        )}
      </Route>
    </Routes>
  );
}

export default App;
