import React, { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Navbar from "../../Component/Header/Navbar/Navbar";
import { NavLink, useNavigate } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();
  const HandelButton = () => {
    navigate("form");
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex flex-col items-center justify-center px-4 pt-8">
        <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200">
          {/* Profile Image */}
          <div className="flex justify-center mt-6">
            <div className="avatar">
              <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img
                  src={user?.photoURL || "https://i.pravatar.cc/150"}
                  alt="User"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {user?.displayName || "User Name"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {user?.email || "user@email.com"}
            </p>

            {/* Update Button */}
            <NavLink
              onClick={HandelButton}
              className="btn btn-primary mt-6 w-full hover:scale-105 transition-transform duration-200"
            >
              Update Profile
            </NavLink>
          </div>
        </div>

        {/* Optional Extra Info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Welcome to your profile dashboard!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
