import { useState } from "react";

import AuthService from "../../services/AuthService";

import { AdminDashFail,AdminDashSuccess } from "./AdminDashBoard/AdminDashBoard";


export const AdminDashBoard = () => {
  
  const user = AuthService.getUser();
  const [userData, setUserData] = useState(user);
  
  let dashboardContent;  
  
  if(userData.role==="ADMIN"){
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
