import { useState } from "react";
import { AdminDashFail,AdminDashSuccess } from "./AdminDashBoard/AdminDashBoard";

import ProductService from "../../services/ProductService";
import AuthService from "../../services/AuthService";







export const AdminDashBoard = () => {
  
  const user = AuthService.getUser();
  const [userData, setUserData] = useState(user);
  
  let dashboardContent;  
  
  if(userData.role==="ROLE_ADMIN"){
    dashboardContent = <AdminDashSuccess></AdminDashSuccess>;
  }else{
    dashboardContent = <AdminDashFail></AdminDashFail>;
  }

  
  return (
    <div>
      <h1>Hello</h1>
      <br />
      {dashboardContent}
    </div>
  );
};

export default AdminDashBoard;
