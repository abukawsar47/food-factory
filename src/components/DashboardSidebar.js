import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-green-50 text-base-content">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
