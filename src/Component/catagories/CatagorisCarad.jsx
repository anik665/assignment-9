import React from "react";
import { Link } from "react-router";

const CatagorisCarad = ({ data }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
      {/* Image */}
      <figure className="h-48 overflow-hidden rounded-t-xl">
        <img
          src={data.image}
          alt={data.category}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg font-semibold">{data.skillName}</h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="badge badge-warning badge-sm">⭐ {data.rating}</span>
          <span>Rating</span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-primary mt-2">${data.price}</p>

        {/* Button */}
        <div className="card-actions mt-4">
          <Link
            to={`viewDetails/${data.skillId}`}
            className="btn btn-primary w-full rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagorisCarad;
