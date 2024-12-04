import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 shadow-lg text-gray-600 text-base font-semibold"
          >
            <li>
              <Link to="/home" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allreviews" className="hover:text-blue-600">
                All Reviews
              </Link>
            </li>
            <li>
              <Link to="/addreview" className="hover:text-blue-600">
                Add Review
              </Link>
            </li>
            <li>
              <Link to="/myreviews" className="hover:text-blue-600">
                My Reviews
              </Link>
            </li>
            <li>
              <Link to="/gamewatchlist" className="hover:text-blue-600">
                Game Watchlist
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
            <img
              src={logo}
              alt="Website logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 hidden md:block">
            Chill Gamer
          </h1>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-gray-600 text-base font-semibold">
          <li>
            <Link to="/home" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/allreviews" className="hover:text-blue-600">
              All Reviews
            </Link>
          </li>
          <li>
            <Link to="/addreview" className="hover:text-blue-600">
              Add Review
            </Link>
          </li>
          <li>
            <Link to="/myreviews" className="hover:text-blue-600">
              My Reviews
            </Link>
          </li>
          <li>
            <Link to="/gamewatchlist" className="hover:text-blue-600">
              Game Watchlist
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-3 ">
        <Link
          to="/login"
          className="btn btn-outline border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-500 text-lg"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="btn bg-blue-500 text-white text-lg hover:bg-blue-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
