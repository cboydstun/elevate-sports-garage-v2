import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className="navbar">
      <div className="sidebar-container">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo"
            src="https://res.cloudinary.com/dlcaybqqy/image/upload/v1740608408/logo_qqatsu.png"
            alt="esg logo"
          />
        </Link>
      </div>
      <div className="nav-content">
        <h1 className="site-title">Elevate Sports Garage</h1>
        <p className="tagline">
          Elevate Your Game at Canyon Lake's Premier Batting Facility
        </p>
      </div>
    </nav>
  );
}
