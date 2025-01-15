import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("authToken");
  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AutoBazaar</Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li>
              <span>Welcome, {loggedInUser}!</span>
            </li>
            <li>
              <Link to="/add-car">Add Car</Link>
            </li>
            <li>
              <Link to="/cars">Car List</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
