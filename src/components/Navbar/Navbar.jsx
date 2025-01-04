import React from 'react';
import { gsap } from 'gsap';
import './Navbar.css';
import logo from '../Images/DCClogo.png'

const Navbar = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0,  opacity: 1, duration: 2, ease: "power2.out", delay: 1.8 }
    );

    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.3, ease: "power2.out", delay: 1.8 }
    );
  }, []);

  return (
    <div className="navbar">
     <div className="logo">
        <img
          src={logo} // Replace with your logo link
          alt="Logo"
        />
      </div>

      <ul className="nav-links">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#portfolio">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
     
    </div>
  );
};

export default Navbar;
