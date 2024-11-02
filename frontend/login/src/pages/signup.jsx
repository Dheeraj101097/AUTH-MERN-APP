import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleFailure, handleSuccess } from "../utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  //
  const handleChange = (e) => {
    const { name, value } = e.target; //what w etype  we r getting
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
    console.log(name, value);
  };
  //   console.log("signupInfo", signupInfo);

  //
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    // day2
    // extract info from signupinfo
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleFailure("name, email and password are required");
    }

    //do try catch if name email pass entered

    try {
      const url = "http://localhost:5000/auth/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      }); //diwali did
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (error) {
        const details = error?.details[0].message;
        handleFailure(details);
      } else if (!success) {
        handleFailure(message);
      }
    } catch (error) {
      console.log(error);
      handleFailure(error);
    }
  };

  return (
    // bg-gray-200
    <div className="flex items-center justify-center min-h-screen bg-background-pattern bg-cover">
      <div className="bg-white/25 backdrop-blur-sm	 flex flex-col items-center justify-center h-fit px-10 py-6 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Signup
        </h2>
        <form method="post" action="#" onSubmit={handleSignup}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black "
            >
              Username
            </label>
            <input
              onChange={handleChange}
              type="text"
              autoFocus
              placeholder="Enter Username"
              name="name"
              value={signupInfo.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-3"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              autoFocus
              placeholder="Enter email"
              name="email"
              value={signupInfo.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-black"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              name="password"
              value={signupInfo.password}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  mb-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-300 text-black p-1 pb-1 rounded-md shadow-sm hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-6 text-center align-middle justify-center"
          >
            Signup
          </button>
          <div className="m-2">
            <span>
              Already have an account ?{" "}
              <Link
                className="text-white hover:underline hover:text-cyan-400"
                to="/login"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Zoom
        />
      </div>
    </div>
    // className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-6"
  );
}

export default Signup;
