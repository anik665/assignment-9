import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Component/Header/Navbar/Navbar";

const ProfileLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
