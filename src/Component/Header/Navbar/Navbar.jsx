import React, { useContext } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { AuthContex } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut, loading } = useContext(AuthContex);

  if (loading) return null;

  const linkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "hover:text-primary transition";

  const Links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={linkClass}>
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-50"
    >
      <div className="navbar bg-base-100 shadow-md px-4 lg:px-10">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 shadow">
              {Links}
            </ul>
          </div>

          <NavLink to="/" className="text-2xl font-bold text-primary">
            Skill<span className="text-secondary">Swap</span>
          </NavLink>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">{Links}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <span className="text-sm font-medium">
                {user.displayName || user.email}
              </span>
              <button onClick={LogOut} className="btn btn-outline btn-primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline btn-primary">
                Login
              </NavLink>
              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink to="/register" className="btn btn-primary text-white">
                  Sign Up
                </NavLink>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
