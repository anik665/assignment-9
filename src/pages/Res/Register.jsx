import React, { useContext, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { CreateUser, updateUser, error, setError, LoginWithGoogle } =
    useContext(AuthContex);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error

    const name = e.target.name.value.trim();
    const photoUrl = e.target.photourl.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // Check if fields are empty
    if (!name || !email || !password) {
      setError("All fields are required");
      return toast.error("All fields are required");
    }

    // Password validation
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      setError(
        "Password must be 8+ chars with uppercase, number & special character"
      );
      return toast.error(
        "Password must be 8+ chars with uppercase, number & special character"
      );
    }

    // Create user
    CreateUser(email, password)
      .then(() => {
        updateUser(name, photoUrl)
          .then(() => {
            toast.success("You are signed up successfully!");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setError("Failed to update profile");
            toast.error("Failed to update profile");
          });
      })
      .catch((err) => {
        console.log(err);
        // Customize Firebase error messages
        if (err.code === "auth/email-already-in-use") {
          setError("Email already in use");
          toast.error("Email already in use");
        } else if (err.code === "auth/invalid-email") {
          setError("Invalid email");
          toast.error("Invalid email");
        } else if (err.code === "auth/weak-password") {
          setError("Weak password");
          toast.error("Weak password");
        } else {
          setError("Something went wrong");
          toast.error("Something went wrong");
        }
      });
  };
  const HandelGoogleLogin = () => {
    LoginWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">
            Create an Account
          </h1>

          <form onSubmit={handelSubmit}>
            <fieldset className="fieldset">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered"
                placeholder="Enter your full name"
              />
              <label className="label">
                <span className="label-text">Profile Photo URL</span>
              </label>
              <input
                type="text"
                name="photourl"
                className="input input-bordered"
                placeholder="https://example.com/photo.jpg"
              />
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered"
                placeholder="you@example.com"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle password type
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
              <button className="btn btn-primary mt-4 w-full">
                Create Account
              </button>
              <div className="divider">OR</div>{" "}
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
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
              <p className="text-center text-sm mt-3 text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="link link-primary">
                  Login
                </a>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
