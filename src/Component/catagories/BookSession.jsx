import React, { useState } from "react";

import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../Header/Navbar/Navbar";

const BookSession = () => {
  const datas = useLoaderData();
  const { id } = useParams();

  const filterData = datas.find((data) => data.skillId === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  if (!filterData) {
    return <p className="text-center text-red-500 mt-20">Session not found</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen w-full bg-gray-50">
        {/* HERO */}
        <div className="h-72 w-full bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-2">{filterData.skillName}</h1>
            <p className="text-blue-100">{filterData.category} Training</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-6 lg:p-10">
            {/* LEFT */}
            {/* LEFT — DETAILS */}
            <div className="space-y-6">
              {/* IMAGE */}
              <img
                src={filterData.image}
                alt={filterData.skillName}
                className="w-full h-64 object-cover rounded-xl shadow"
              />

              {/* COURSE TITLE + DESCRIPTION */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {filterData.skillName} {/* ✅ title visible */}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {filterData.description}
                </p>
              </div>

              {/* INFO CARDS */}
              <div className="grid grid-cols-2 gap-4">
                <Info label="Instructor" value={filterData.providerName} />
                <Info label="Rating" value={`⭐ ${filterData.rating}`} />
                <Info
                  label="Available Slots"
                  value={filterData.slotsAvailable}
                />
                <Info label="Price" value={`$${filterData.price}`} />
              </div>
            </div>

            {/* RIGHT */}
            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-center mb-6">
                Book This Session
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto"
              >
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
                    Your Email
                  </label>
                </div>

                {/* Phone Number Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs">
                    Phone Number
                  </label>
                </div>

                {/* Date Input */}
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Time Input */}
                <div className="relative">
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-600 text-sm">
                    I accept the{" "}
                    <a href="/terms" className="text-blue-600 underline">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.terms}
                  className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="bg-slate-100 p-4 rounded-lg">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

export default BookSession;
