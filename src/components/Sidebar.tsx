import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-6">
        <h2 className="text-lg font-bold">Navigation</h2>
      </div>
      <nav className="mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-md ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/loans"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-md ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Loan Management
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `block px-6 py-3 rounded-md ${
              isActive ? "bg-blue-600" : "hover:bg-gray-700"
            }`
          }
        >
          Transactions
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
