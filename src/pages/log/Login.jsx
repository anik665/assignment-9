import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContex } from "../../Provider/AuthProvider";

const Login = () => {
  const { UserLogin, setLoading } = useContext(AuthContex);
  // console.log(user, "this is login button");

  const navigate = useNavigate();
  const HandelLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    UserLogin(email, password)
      .then((res) => {
        navigate("/");
        console.log(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false); // ✅ stop loading always
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center">Welcome Back 👋</h1>
          <p className="text-center text-sm text-gray-500 mb-4">
            Login to continue to SkillSwap
          </p>

          <form onSubmit={HandelLogin}>
            {" "}
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="you@example.com"
              />

              {/* Password */}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
