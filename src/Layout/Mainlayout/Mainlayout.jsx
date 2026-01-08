import React from "react";
import Header from "../../Component/Header/Header";
import { Outlet } from "react-router";
import Catagory from "../../pages/Catagory/Catagory";
import Footer from "../../Component/Footer/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full px-4 md:px-8">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 sticky top-20">
          <Catagory />
        </aside>

        {/* Content */}
        <section className="col-span-12 md:col-span-9">
          <Outlet />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Mainlayout;
