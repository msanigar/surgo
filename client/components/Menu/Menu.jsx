import React from 'react';
import Link from "next/link";

import Close from '../SVG/Close';

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
          <Link href={"/about"}><a>About us</a></Link>
          <Link href={"/about"}><a>Contact</a></Link>
          <Link href={"/blog"}><a>Blog</a></Link>
          <h4>Programmes</h4>
          <Link href={"/about"}><a>Starter</a></Link>
          <Link href={"/about"}><a>Buffed</a></Link>
          <Link href={"/about"}><a>Ultimate</a></Link>
          <h4>FAQ</h4>
          <Link href={"/faq"}><a>What is this?</a></Link>
          <Link href={"/faq"}><a>What is that?</a></Link>
          <Link href={"/faq"}><a>How much is it?</a></Link>
          <Link href={"/faq"}><a>Who does this work for?</a></Link>
          <Link href={"/faq"}><a>Do you sponsor teams?</a></Link>
          <Link href={"/faq"}><a>When is it available?</a></Link>
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