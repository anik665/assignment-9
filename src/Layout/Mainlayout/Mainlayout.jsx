import React from "react";
import Header from "../../Component/Header/Header";
import { Outlet } from "react-router";
import Catagory from "../../pages/Catagory/Catagory";

const Mainlayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        {" "}
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-3 w-11/12 mx-auto">
        <aside className=" col-span-3  ">
          <Catagory></Catagory>
        </aside>

        <div className="col-span-9">
          <Outlet className="" />
        </div>
      </main>
    </div>
  );
};

export default Mainlayout;
