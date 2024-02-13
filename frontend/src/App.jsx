import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import ToolsAndEquipments from "./pages/toolsEquipments/ToolsAndEquipments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="tools" element={<ToolsAndEquipments />} />
      </Route>
    </Routes>
  );
}

export default App;
