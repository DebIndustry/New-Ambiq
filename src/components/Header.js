import React, { useState } from "react";
import "../styles/Header.css";
import { TfiAndroid } from "react-icons/tfi";
import { FaApple, FaAmbulance, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
 import flag from "../assets/flag.png";
import logoBlack from "../assets/AmbiQ-Logo.png";
import mapicon from "../assets/mapicon.jpg";


function Header() {
  
  return (
    <div>
       <div className="top-bar-section">
        <div className="top-bar-container">
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt className="iconT" />
              <span>+91 70445 42223</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="iconT" />
              <span>support@ambiq.in</span>
            </div>
            <div className="contact-item">
              <img src={mapicon} className="iconT" />
              <span>Pan India Services</span>
            </div>
          </div>
          <div className="navigation-icons">
            <a href="#">Home</a>
            <a href="#">News &amp; Media</a>
            <a href="#">Contact Us</a>
            <a href="#">Blogs</a>
            <a href="#">Download</a>
            <div className="align">
              <TfiAndroid className="android" />
              <FaApple className="apple" />
              <img src={flag} alt="Flag" className="email-image" />
            </div>
          </div>
        </div>
      </div>

       <div className="logo-nav-section">
        <div className="logo-container">
          <img alt="Ambulance logo" className="logo-image" src={logoBlack} />
        </div>
        <div className="nav-links-section" >
          <a href="#">ABOUT US</a>
          <a href="#">OUR SERVICES</a>
          <a href="#">SOLUTIONS</a>
          <a href="#">CAREERS</a>
          <a className="enquiry-button" href="#">
            <FaAmbulance className="ioicon" />
            <span>Enquiry Us?</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
