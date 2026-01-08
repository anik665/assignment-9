import React from "react";
import Header from "../../Component/Header/Header";
import { Outlet } from "react-router";
import Catagory from "../../pages/Catagory/Catagory";
import Footer from "../../Component/Footer/Footer";

const Mainlayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        {" "}
        <Header />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-12 gap-3 w-11/12 mx-auto">
        <aside className=" md:col-span-3 sticky top-20">
          <Catagory />
        </aside>

        <div className="md:col-span-9">
          <Outlet />
        </div>
      </main>

      <footer>
        {" "}
        <Footer />{" "}
      </footer>
    </div>
  );
};

export default Mainlayout;
