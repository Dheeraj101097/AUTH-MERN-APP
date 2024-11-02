import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       setAuthenticated(true);
  //       navigate("/login", { replace: true });
  //     }
  //     const refreshInterval = setInterval(() => {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         navigate("/login", { replace: true });
  //       }
  //     }, 1800000); // 30 minutes
  //   }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setAuthenticated]);
  return null;
}

export default RefreshHandler;
