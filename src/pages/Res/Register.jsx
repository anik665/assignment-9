import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">
            Create an Account
          </h1>

          <fieldset className="fieldset">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Enter your full name"
            />

            <label className="label">
              <span className="label-text">Profile Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="https://example.com/photo.jpg"
            />

            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
              placeholder="you@example.com"
            />

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              placeholder="At least 6 characters"
            />

            <button className="btn btn-primary mt-4 w-full">
              Create Account
            </button>

            <p className="text-center text-sm mt-3 text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="link link-primary">
                Login
              </a>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
