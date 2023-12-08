import React from "react";

const Navbar = ({ dark}) => {
  return (
    <nav className={dark ? " navbar bg-dark" : "navbar bg-light"}>
      <div className="container-fluid">
        <span id="plan">Whats your plan Today ?</span>
        <span className="navbar-brand mb-0">

        </span>
      </div>
    </nav>
  );
};

export default Navbar;
