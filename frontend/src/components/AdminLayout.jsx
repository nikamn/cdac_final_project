import { Outlet } from "react-router-dom";

import AdminHeader from "./Header/AdminHeader";
import AdminFooter from "./Footer/AdminFooter";

import "bootstrap/dist/css/bootstrap.min.css";

function AdminLayout() {
  return (
    <div className="app-wrapper">
      <AdminHeader />
      <div className="AdminContent">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;
