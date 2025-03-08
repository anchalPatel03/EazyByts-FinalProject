import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // 🎨 Optional CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🎟️ Event Manager</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
