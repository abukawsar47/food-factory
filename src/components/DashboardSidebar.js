import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-green-50 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <li>
              <NavLink
                to="/dashboard/addFood"
                className="rounded-lg  hover:btn-secondary duration-800 font-bold"
              >
                Add Food
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addEmployee"
                className="rounded-lg  hover:btn-secondary duration-800 font-bold"
              >
                Add Employee
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myOrders"
                className="rounded-lg  hover:btn-secondary duration-800 font-bold"
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/manageOrders"
                className="rounded-lg  hover:btn-secondary duration-800 font-bold"
              >
                Manage Orders
              </NavLink>
              <NavLink
                to="/dashboard/addReview"
                className="rounded-lg  hover:btn-secondary duration-800 font-bold"
              >
                Add Review
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
