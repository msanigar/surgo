import React from "react";

const NavButton = ({ toggle, theme }) => {
  const classes = theme == "dark" ? "nav dark" : "nav";
  return (
    <div className={classes}>
      <div className="nav-logo">
        <p>Surgo</p>
      </div>
      <div className="nav-toggle">
        Menu
        <input type="checkbox" id="nav-checkbox" onChange={() => toggle()} />
        <label htmlFor="nav-checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
    </div>
  );
};

export default NavButton;
