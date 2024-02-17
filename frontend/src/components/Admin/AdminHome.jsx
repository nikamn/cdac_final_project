import { Outlet, Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { useEffect } from "react";

const AdminHome = () => {
  const user = AuthService.getUser();

  useEffect(() => {
    window.location.reload;
  }, [user]);



  

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="mt-5">Welcome Admin</h1>
      <br />
      <Link to="dashboard">
        <button type="button" className="btn btn-outline-primary mb-5">
          Product Management
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default AdminHome;
