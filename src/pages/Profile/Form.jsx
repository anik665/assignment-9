import React, { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Form = () => {
  const { updateUser } = useContext(AuthContex);
  const navigate = useNavigate();
  const Handelsubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photoUrl = e.target.PhotoUrl.value;
    console.log(email, name, photoUrl);
    updateUser(name, photoUrl)
      .then(() => {
        toast("Your SuccessFully Update Your Profile");
        navigate("/profile");
      })
      .catch((err) => {
        toast(err.code);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          {" "}
          <div className="card-body">
            <form onSubmit={Handelsubmit}>
              <fieldset className="fieldset">
                {/* Email */}
                <label htmlFor="" className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Enter Your Name"
                />
                <label htmlFor="" className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="PhotoUrl"
                  className="input input-bordered w-full"
                  placeholder="Enter Your PhotoUrl"
                />

                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>

                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                />

                <button className="btn btn-primary mt-4 w-full">
                  Update Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
