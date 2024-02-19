import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer2 from "./Footer/Footer2";

import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col">
        <header className=" h-[90px] shadow-md bg-white dark:bg-gray-800 z-50">
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer2 />
    </div>
  );
}

export default Layout;
