import { Outlet, Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Hi</h2>
      <h1>Welcome Admin</h1>
      <br />
      <h1>Yaha pr alag alag buttons</h1>
      <Link to="dashboard">
      <button type="button">Product Management</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default AdminHome;
