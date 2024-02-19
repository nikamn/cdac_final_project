import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default Layout;
