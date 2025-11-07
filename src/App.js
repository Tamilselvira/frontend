import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bookings from "./pages/Bookings";
import ServiceFinder from "./pages/ServiceFinder";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [bookingCount, setBookingCount] = useState(0);

  return (
    <Router>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userName={userName}
        bookingCount={bookingCount}
      />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={isLoggedIn ? <Bookings /> : <Navigate to="/" />} />
        <Route path="/service-finder" element={isLoggedIn ? <ServiceFinder setBookingCount={setBookingCount} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
