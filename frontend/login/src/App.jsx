import { useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/home.jsx";
import Mydata from "./pages/mydata.jsx";
import RefreshHandler from "./refreshHandler.jsx";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);

  const PrivateRoute = (element) => {
    return Authenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mydata" element={<Mydata />} />
      </Routes>
    </>
  );
}

export default App;
