import React from "react";
import Button from "../Button";
import SearchBox from "../SearchBox";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="./logo.png"
        alt="Logo"
        width={67}
        height={34}
        style={{ display: "block" }}
      />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
