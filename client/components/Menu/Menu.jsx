import React from "react";
import Link from "next/link";
import Signup from "../Signup";

import Close from "../SVG/Close";

const currentYear = new Date().getFullYear();

const Menu = ({ show, hide }) => {
  return (
    <div className={show ? "menu open" : "menu"}>
      <div className='menu-container'>
        <div className='menu-header'>
          <Signup />
          <div className='cross light-font' onClick={() => hide()}>
            <Close />
          </div>
        </div>
        <div className='menu-content'>
          <div className='menu-wrapper'>
            <div className='menu-content-box'>
              <h4>Surgo</h4>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
              <Link href={"/about"}>
                <a>About us</a>
              </Link>
              <Link href={"/about#missions"}>
                <a>Mission</a>
              </Link>
              <Link href={"/contact"}>
                <a>Contact</a>
              </Link>
              <Link href={"/blog"}>
                <a>Blog</a>
              </Link>
              <Link href={"/brand"}>
                <a>Brand</a>
              </Link>
              <Link href={"/terms"}>
                <a>Terms</a>
              </Link>
            </div>

            <div className='menu-content-box'>
              <h4>Services</h4>
              <Link href={"/about"}>
                <a>Case Studies</a>
              </Link>
              <Link href={"/about"}>
                <a>Pilot Programmes</a>
              </Link>
              <Link href={"/about"}>
                <a>Wealth Management</a>
              </Link>
              <Link href={"/about"}>
                <a>Nutrition & Dieting</a>
              </Link>
              <Link href={"/about"}>
                <a>Strength & Conditioning</a>
              </Link>
              <Link href={"/about"}>
                <a>Team dynamics & Comms</a>
              </Link>
            </div>

            <div className='menu-content-box'>
              <h4>FAQ</h4>
              <Link href={"/faq#0"}>
                <a>How much does Surgo cost?</a>
              </Link>
              <Link href={"/faq#1"}>
                <a>What is that?</a>
              </Link>
              <Link href={"/faq#2"}>
                <a>How long does Surgo take to do?</a>
              </Link>
              <Link href={"/faq#3"}>
                <a>Who do we work with?</a>
              </Link>
              <Link href={"/faq#4"}>
                <a>Who does the Surgo programmes</a>
              </Link>
              <Link href={"/faq#5"}>
                <a>Do you sponsor teams or events?</a>
              </Link>
              <Link href={"/faq#6"}>
                <a>When is it available to buy?</a>
              </Link>
            </div>

            <div className='menu-content-box'>
              <h4>Social</h4>
              <Link href={"/faq"}>
                <a>Twitter</a>
              </Link>
              <Link href={"/faq"}>
                <a>LinkedIn</a>
              </Link>
              <Link href={"/faq"}>
                <a>Instagram</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='menu-footer'>
          <p>
            Copyright &copy; {currentYear}- Surgo Consulting Ltd. Headquarters:
            London, United Kingdom. All rights reserved. Surgo Consulting Ltd.
            London, United Kingdom Registered organisation number: 89723984{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
