import React, { useState } from "react";
import "./Header.css";
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';

const Header = (props) => {

  let headerDivColor = props.colors.headerColor
  return (
    <div className="navbar">
      <h2> <FaCheckCircle /> Pomofocus</h2>
      <div style = {{display: "flex",
    justifyContent: "flex-end", gap: "10px",
     alignItems: "center"}}>
        <div style = {{backgroundColor: headerDivColor,}}> <HiDocumentReport/> Reports </div>
        <div style = {{backgroundColor: headerDivColor,}}> <FiSettings/> Setting </div>
        <div style = {{backgroundColor: headerDivColor,}}> <BiUserCircle/> Login </div>
      </div>
    </div>
  );
};

export default Header;
