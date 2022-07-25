import React from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import useAdmin from "../hooks/useAdmin";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [admin] = useAdmin();
  const { pathname } = useLocation();

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-100 sticky shadow-sm top-0 z-50 lg:px-20">
          {/* /Dashboard/ */}
          {pathname.includes("dashboard") && (
            <label
              htmlFor="my-drawer-2"
              tabIndex="0"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
          <div className="flex-1 px-2 mx-2">
            <img className="md:w-50 w-40" src={logo} alt="logo" />
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-3">
              <li>
                <NavLink
                  to="/"
                  className="rounded-lg  hover:btn-secondary duration-1000 font-bold "
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/all-foods"
                  className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                >
                  Foods
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                >
                  Contact
                </NavLink>
              </li>
              {admin && (
                <li>
                  <NavLink
                    to="/dashboard"
                    className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}

              <li className="dropdown dropdown-hover dropdown-end ">
                <label
                  tabIndex="0"
                  className="btn btn-primary btn-outline rounded-lg hover:btn-secondary duration-1000 font-bold "
                >
                  BOOK NOW
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>

              <li>
                {user ? (
                  <Link
                    to=""
                    className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                    onClick={logout}
                  >
                    Sign Out
                  </Link>
                ) : (
                  <NavLink
                    to="/login"
                    className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                  >
                    Login
                  </NavLink>
                )}
              </li>

              <li className={!user ? "hidden" : "block"}>
                {user ? (
                  <div className="avatar p-2 ">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100">
                      <img
                        src={
                          user?.photoURL
                            ? user?.photoURL
                            : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                        }
                        alt="user"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 gap-y-2">
          <li>
            <NavLink
              to="/"
              className="rounded-lg  hover:btn-secondary duration-1000 font-bold "
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/all-foods"
              className="rounded-lg hover:btn-secondary duration-1000 font-bold "
            >
              Foods
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="rounded-lg hover:btn-secondary duration-1000 font-bold "
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="rounded-lg hover:btn-secondary duration-1000 font-bold "
            >
              Contact
            </NavLink>
          </li>
          {admin && (
            <li>
              <NavLink
                to="/dashboard"
                className="rounded-lg hover:btn-secondary duration-1000 font-bold "
              >
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            {user ? (
              <Link
                to=""
                className="rounded-lg hover:btn-secondary duration-1000 font-bold "
                onClick={logout}
              >
                Sign Out
              </Link>
            ) : (
              <NavLink
                to="/login"
                className="rounded-lg hover:btn-secondary duration-1000 font-bold "
              >
                Login
              </NavLink>
            )}
          </li>
          <li className="hidden">
            {user ? (
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                    }
                    alt="user"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </li>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">BOOK NOW</div>
            <div className="collapse-content">
              <li>
                <NavLink
                  to=""
                  className="hover:btn-secondary duration-1000 font-bold"
                >
                  Item 1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="hover:btn-secondary duration-1000 font-bold"
                >
                  Item 2
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
