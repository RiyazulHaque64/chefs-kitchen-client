import { Link, NavLink } from "react-router-dom";
import { TbToolsKitchen2 } from "react-icons/tb";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="w-full mx-auto py-10">
      <div className="relative flex items-center justify-between">
        {/* logo section */}
        <Link to="/" className="inline-flex items-center">
          <TbToolsKitchen2 className="h-6 w-6 text-lime-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">
            Chefs Kitchen
          </span>
        </Link>

        {/* navbar section */}
        <nav>
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            {user ? (
              <li
                onClick={handleLogout}
                title="Logout"
                className="text-gray-700 hover:text-lime-600 font-medium duration-200 transition-colors cursor-pointer"
              >
                <FiLogOut />
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
            <li>
              <img className="w-10" src={user?.photoURL} alt="" />
            </li>
          </ul>
        </nav>

        {/* responsive navbar section */}
        <div className="lg:hidden">
          {/* dropdown open button */}
          <button
            aria-level="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiBars3BottomRight className="w-5 text-gray-600" />
          </button>

          {isMenuOpen && (
            <div className="absolute -top-5 left-0 w-full z-10">
              <div className="border p-5 rounded shadow-sm bg-white">
                {/* responsive logo & button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <TbToolsKitchen2 className="h-6 w-6 text-lime-600" />
                      <span className="ml-2 text-xl font-bold text-gray-800">
                        Chefs Kitchen
                      </span>
                    </Link>
                  </div>
                  {/* dropdown close button */}
                  <div>
                    <button
                      aria-level="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiOutlineXMark className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* responsive menu items */}
                <nav>
                  <ul className="space-y-3">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
