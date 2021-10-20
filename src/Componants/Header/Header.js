import React from "react";
import "./Header.css";
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="navbar">
      <h2> <FaCheckCircle /> Pomofocus</h2>
      <div style = {{display: "flex",
    justifyContent: "flex-end", gap: "10px",
    backgroundColor: "#D95550", alignItems: "center"}}>
        <div> <HiDocumentReport/> Reports </div>
        <div> <FiSettings/> Setting </div>
        <div> <BiUserCircle/> Login </div>
      </div>
    </div>
  );
};

export default Header;
