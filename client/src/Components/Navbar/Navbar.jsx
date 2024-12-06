import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import demouser from "../../assets/demouser.png";
import logo from "../../assets/logo.jpg";
import { AuthContext } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
  };

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-blue-600 active"
                    : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/allreviews"
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-blue-600 active"
                    : "hover:text-blue-600"
                }
              >
                All Reviews
              </NavLink>
            </li>
            {/* private routes */}
            {user && (
              <>
                <li>
                  <NavLink
                    to="/addreview"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:text-blue-600 active"
                        : "hover:text-blue-600"
                    }
                  >
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myreviews"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:text-blue-600 active"
                        : "hover:text-blue-600"
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gamewatchlist"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:text-blue-600 active"
                        : "hover:text-blue-600"
                    }
                  >
                    Game Watchlist
                  </NavLink>
                </li>
              </>
            )}
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "hover:text-blue-600 active" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allreviews"
              className={({ isActive }) =>
                isActive ? "hover:text-blue-600 active" : "hover:text-blue-600"
              }
            >
              All Reviews
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/addreview"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-600 active"
                      : "hover:text-blue-600"
                  }
                >
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myreviews"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-600 active"
                      : "hover:text-blue-600"
                  }
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gamewatchlist"
                  className={({ isActive }) =>
                    isActive
                      ? "hover:text-blue-600 active"
                      : "hover:text-blue-600"
                  }
                >
                  Game Watchlist
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        <button
          className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-500 flex justify-center items-center tooltip"
          data-tip={user ? user.displayName : "Demo User"}
        >
          <img
            src={user ? user.photoURL : demouser}
            className="rounded-full"
            alt=""
          />
        </button>
        {!user ? (
          <>
            <Link
              to="/login"
              className="btn btn-outline border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-500 text-sm md:text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-blue-500 text-white text-sm md:text-base"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 text-sm sm:text-base md:text-lg transition-shadow shadow-md hover:shadow-lg"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
