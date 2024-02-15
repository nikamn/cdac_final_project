import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ToolsAndEquipments from "./pages/toolsEquipments/ToolsAndEquipments";

import "./App.css";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Products from "./components/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="tools" element={<ToolsAndEquipments />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
