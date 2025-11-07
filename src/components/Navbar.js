import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn, userName, bookingCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>🔧 ServiceFinder</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service-finder">Find Services</Link></li>
        {isLoggedIn && (
          <li><Link to="/bookings">Bookings ({bookingCount})</Link></li>
        )}
        {isLoggedIn ? (
          <>
            <li className="user">Hi, {userName}</li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
