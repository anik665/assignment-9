import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    UserLogin,
    GoogleLogin,
    setLoading,
    ResetPassword,
    error,
    setError,
    LoginWithGoogle,
  } = useContext(AuthContex);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  // Path user tried to visit before login
  const from = location.state?.from?.pathname || "/";

  // Regular email/password login
  const HandelLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Email and password are required");
      toast.error("Email and password are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        transition: Bounce,
      });
      setLoading(false);
      return;
    }

    UserLogin(email, password)
      .then(() => {
        toast.success("You are logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          transition: Bounce,
        });
        navigate(from, { replace: true }); // redirect to intended page
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (
          err.code === "auth/wrong-password" ||
          err.code === "auth/user-not-found"
        ) {
          setError("Your email or password is wrong");
          toast.error("Your email or password is wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            transition: Bounce,
          });
        } else {
          setError("Something went wrong");
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            transition: Bounce,
          });
        }
        setLoading(false);
      });
  };

  // Google login
  // const HandelGoogleLogin = () => {
  //   setLoading(true);
  //   GoogleLogin()
  //     .then(() => {
  //       toast.success("Logged in with Google!", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         transition: Bounce,
  //       });
  //       navigate(from, { replace: true }); // redirect to intended page
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Google login failed!", {
  //         position: "top-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         transition: Bounce,
  //       });
  //       setLoading(false);
  //     });
  // };

  // Reset password
  const HandelresetPass = () => {
    const email = emailRef.current.value.trim();
    if (!email) {
      setError("Please enter your email to reset password");
      return toast.error("Please enter your email to reset password", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        transition: Bounce,
      });
    }
    ResetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Please check your inbox", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to send reset email");
        toast.error("Failed to send reset email", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          transition: Bounce,
        });
      });
  };
  const HandelGoogleLogin = () => {
    LoginWithGoogle()
      .then(() => {
        toast.success("You are logged in successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          transition: Bounce,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.code);
        toast.error("Your Credintional is wrong");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login to SkillSwap</h1>

          {/* Email / Password Form */}
          <form onSubmit={HandelLogin}>
            <fieldset className="fieldset mt-4">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                className="input input-bordered w-full"
                placeholder="you@example.com"
              />

              <label className="label mt-2">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter Your Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="text-right mt-1">
                <button
                  type="button"
                  onClick={HandelresetPass}
                  className="link link-hover text-sm text-primary"
                >
                  Forgot password?
                </button>
              </div>

              <button className="btn btn-primary mt-4 w-full">Login</button>

              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </fieldset>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login Button */}
          <button
            onClick={HandelGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* Register link */}
          <p className="text-center text-sm mt-4 text-gray-500">
            Don’t have an account?{" "}
            <NavLink to="/register" className="link link-primary">
              Create one
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
