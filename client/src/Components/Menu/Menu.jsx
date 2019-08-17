import React from 'react';
import { Link } from "react-router-dom";
import './Menu.scss';
import { ReactComponent as Close } from '../../Styles/SVG/close.svg';

const Menu = ({ show, hide }) => {
  return (
    <div className={show ? "menu open" : "menu"}>
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="menu-title">Surgo</h2>
          <h3 className="menu-beta">Join the beta</h3>
          <input placeholder="Enter your email address here" id="email" type="text" className="validate" />

          <div className="btn-container">
            <button className="btn">
              Sign up
            </button>
          </div>

          <div
            className="cross light-font"
            onClick={() => hide()}
          >
          <Close />
          </div>
        </div>
        <div className="menu-content">
          <Link to={"/about"}>About us</Link>
          <Link to={"/about"}>Contact</Link>
          <h4>Programmes</h4>
          <Link to={"/about"}>Starter</Link>
          <Link to={"/about"}>Buffed</Link>
          <Link to={"/about"}>Ultimate</Link>
          <h4>FAQ</h4>
          <Link to={"/about"}>What is this?</Link>
          <Link to={"/about"}>What is that?</Link>
          <Link to={"/about"}>How much is it?</Link>
          <Link to={"/about"}>Who does this work for?</Link>
          <Link to={"/about"}>Do you sponsor teams?</Link>
          <Link to={"/about"}>When is it available?</Link>
        </div>
        <div className="menu-footer light-font">
          Copyright &copy; 2019- Surgo
          Consulting Ltd. Headquarters:
          London, United Kingdom.  All
          rights reserved.  Surgo Consulting
          Ltd. London, United Kingdom
          Registered organisation number:
          89723984
        </div>
      </div>
    </div>
  )
}

export default Menu;