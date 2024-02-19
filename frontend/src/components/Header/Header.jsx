import { useEffect, useState } from "react";
import logo from "../../assets/logo2/svg/Color logo - no background.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouseChimney,
  faRemove,
  faList,
  faTrowel,
  faHandsHoldingCircle,
  faUser,
  faChevronDown,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../../services/AuthService";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  const [user, setUser] = useState(AuthService.getUser());

  const location = useLocation();

  useEffect(() => {
    setUser(AuthService.getUser());
  }, [flyer, flyerTwo, location]);

  const handleSignOut = () => {
    AuthService.logout();
    setFlyer(false);
  };

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="w-full flex items-center z-10 fixed top-0 h-[90px] bg-[#030637]">
        <div className="w-full  px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <NavLink to="/">
                <span className="sr-only">Workflow</span>
                <img className=" w-auto h-24" src={logo} alt="" />
              </NavLink>
            </div>

            {/* hamburger menu */}
            <div className="mr-2 -my-2 md:hidden">
              <button
                type="button"
                className=" rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <FontAwesomeIcon icon={faBars} className="text-3xl" />
              </button>
            </div>

            <div className="hidden md:flex space-x-10">
              <NavLink
                to="/"
                className="text-xl font-medium text-white hover:text-yellow-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-xl font-medium text-white hover:text-yellow-200"
              >
                Products
              </NavLink>
              <NavLink
                to="/tools"
                className="text-xl font-medium text-white hover:text-yellow-200"
              >
                Tools & Equipments
              </NavLink>
              <NavLink
                to="/about"
                className="text-xl font-medium text-white hover:text-yellow-200"
              >
                About Us
              </NavLink>
              <NavLink
                to="/blog"
                className="text-xl font-medium text-white hover:text-yellow-200"
              >
                Blog
              </NavLink>
            </div>

            {/* user validation */}

            <div className="hidden space-x-5 md:flex items-center justify-end md:flex-1 lg:w-0">
              <NavLink
                to="/wishlist"
                className="wishlist-icon whitespace-nowrap text-xl font-medium text-white hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>

              <NavLink to="/cart" className="cart-icon hover:text-white">
                <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
              </NavLink>
              {user == null ? (
                <div className="space-x-5">
                  <NavLink
                    to="/signin"
                    className="whitespace-nowrap text-xl font-medium text-white hover:text-gray-900"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </NavLink>
                </div>
              ) : (
                <div className="space-x-4">
                  <div className="relative">
                    {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                    <button
                      type="button"
                      className="
                     group bg-transparent rounded-md text-white inline-flex items-center text-xl font-medium  pb-8'
                    "
                      onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                    >
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="px-2"
                        />
                      </span>
                    </button>
                    {/*
                    'user' flyout menu, show/hide based on flyout menu state.
        
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                  */}

                    <div
                      onMouseLeave={() => setFlyer(false)}
                      className={
                        flyer
                          ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-44 mt-3 transform px-2 w-screen max-w-56 sm:px-0 lg:-ml-20 lg:left-1/2 lg:-translate-x-1/2"
                          : " hidden translate-y-1 absolute z-10 -ml-44 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-44 lg:left-1/2 lg:-translate-x-1/2"
                      }
                    >
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <NavLink
                            to="/profile"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-xl font-medium text-gray-900">
                                Profile
                              </p>
                            </div>
                          </NavLink>
                          <NavLink
                            to="/settings"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-xl font-medium text-gray-900">
                                Settings
                              </p>
                            </div>
                          </NavLink>
                          <NavLink
                            to="/"
                            onClick={handleSignOut}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="ml-4">
                              <p className="text-xl font-medium text-gray-900">
                                Sign Out
                              </p>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: ""
        To: ""
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2  transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-24 w-auto" src={logo} alt="logo" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>

                    <FontAwesomeIcon icon={faRemove} className="text-3xl" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faHouseChimney} />
                    <span className="ml-3 text-xl font-medium text-gray-900">
                      Home
                    </span>
                  </NavLink>
                  <NavLink
                    to="/products"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faList} />
                    <span className="ml-3 text-xl font-medium text-gray-900">
                      Products
                    </span>
                  </NavLink>
                  <NavLink
                    to="/tools"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTrowel} />
                    <span className="ml-3 text-xl font-medium text-gray-900">
                      Tools & Equipments
                    </span>
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faHandsHoldingCircle} />
                    <span className="ml-3 text-xl font-medium text-gray-900">
                      Blogs
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <NavLink
                  to="/about"
                  className="text-xl font-medium text-gray-900 hover:text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </NavLink>
              </div>
              {user == null ? (
                <div>
                  <NavLink
                    to="/signup"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => setOpen(false)}
                  >
                    Sign up
                  </NavLink>
                  <p className="mt-6 text-center text-xl font-medium text-gray-500">
                    Existing user?
                    <NavLink
                      to="/signin"
                      className="mx-2 text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </NavLink>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col space-y-4">
                  <NavLink
                    to="/profile"
                    className="text-xl font-medium text-gray-900 hover:text-gray-700"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={handleSignOut}
                    className=" text-xl font-medium text-gray-900 hover:text-gray-700"
                  >
                    Sign Out
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
