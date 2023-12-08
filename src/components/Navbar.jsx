import React from "react";

const Navbar = ({ dark, changetheme }) => {
  return (
    <nav className={dark ? " navbar bg-dark" : "navbar bg-light"}>
      <div className="container-fluid">
        <span id="plan">Whats your plan Today ?</span>
        <span className="navbar-brand mb-0">
          {/* <button id="darkmode"
            className={dark ? "btn btn-light btn-sm" : "btn btn-dark btn-sm"}
            onClick={changetheme}>
            {dark ? "light mode" : "Dark mode"}
          </button> */}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
