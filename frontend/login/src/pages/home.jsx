import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function home() {
  const [loggedInUser, setloggedInUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
  });

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    setTimeout(() => {
      navigate("/login");
      handleSuccess("Logged out Succesfully");
    }, 1000);
  };

  const myData = () => {
    navigate("/mydata");
  };
  return (
    <div>
      <nav className="w-full  p-1 rounded-md shadow-sm  mt-6 text-center align-middle justify-center">
        <div className=" text-6xl ml-2 inline-block gap-5 text-fuchsia-200">
          Welcome {loggedInUser}
        </div>
        <div className="m-6">
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={Navigate("/home")}
          >
            Login
          </button>
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={Navigate("/home")}
          >
            Signin
          </button>
          <ToastContainer />
        </div>
      </nav>

      <div className="">
        <button
          className="bg-emerald-500 m-10 p-1 text-black rounded-md hover:bg-teal-300 "
          onClick={myData}
        >
          Go to My Data
        </button>
      </div>
    </div>
  );
}

export default home;
