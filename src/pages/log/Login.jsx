import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center">Welcome Back 👋</h1>
          <p className="text-center text-sm text-gray-500 mb-4">
            Login to continue to SkillSwap
          </p>

          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />

            {/* Password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />

            {/* Forgot */}
            <div className="text-right mt-1">
              <a className="link link-hover text-sm text-primary">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button className="btn btn-primary mt-4 w-full">Login</button>

            {/* Register link */}
            <p className="text-center text-sm mt-4 text-gray-500">
              Don’t have an account?{" "}
              <NavLink to="/register" className="link link-primary">
                Create one
              </NavLink>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
