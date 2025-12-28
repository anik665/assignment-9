import React, { use } from "react";
import { NavLink } from "react-router";

const catagoryPromise = fetch("/skills.json").then((res) => res.json());

const CatagoryNews = () => {
  const catagory = use(catagoryPromise);

  return (
    <div className="w-full p-4 bg-base-100 rounded-xl shadow-sm">
      {/* Header */}
      <h1 className="text-lg font-semibold mb-4 border-b pb-2">
        All Categories
        <span className="ml-2 text-sm text-gray-500">({catagory.length})</span>
      </h1>

      {/* Category List */}
      <div className="flex flex-col gap-2">
        {/* All Button */}
        <NavLink
          to="catagory/all"
          className={({ isActive }) =>
            `btn btn-sm justify-start w-full border-0 transition-all duration-200
            ${
              isActive
                ? "bg-primary text-white"
                : "bg-base-200 text-gray-600 hover:bg-base-300"
            }`
          }
        >
          📂 All
        </NavLink>

        {/* Dynamic Categories */}
        {catagory.map((catg) => (
          <NavLink
            key={catg.skillId}
            to={`catagory/${catg.skillId}`}
            className={({ isActive }) =>
              `btn btn-sm justify-start w-full border-0 transition-all duration-200
              ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-base-200 text-gray-600 hover:bg-base-300"
              }`
            }
          >
            {catg.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CatagoryNews;
