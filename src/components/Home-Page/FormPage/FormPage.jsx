// FormPage.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FormPage.css";

gsap.registerPlugin(ScrollTrigger);

const FormPage = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const formElements = formRef.current.querySelectorAll(".form-page > div");

    gsap.fromTo(
      formElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="form-main" ref={formRef}>
        <div className="form-page">
          <div className="left-section">
            <h1>
              <span style={{ color: "#ff4500" }}>Our Technology</span> Experts
              Are Change Catalysts
            </h1>
            <p>Book A Free Consultation Call With Our Experts Today</p>
          </div>
          <div className="right-section">
            <form className="form">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" />

              <label htmlFor="email">E-mail ID*</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="contactNumber">Contact Number*</label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter your contact number"
                required
              />

              <label htmlFor="budget">Select a Budget Range</label>
              <select id="budget">
                <option value="" disabled selected>
                  Select a budget range
                </option>
                <option value="low">Below $1,000</option>
                <option value="medium">$1,000 - $10,000</option>
                <option value="high">Above $10,000</option>
              </select>

              <label htmlFor="description">
                Describe Your Project/Idea In Brief (Helps Us Come Back Better
                Prepared)*
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Enter your project details"
                required
              ></textarea>

              <div className="checkbox-section">
                <input type="checkbox" id="nda" />
                <label htmlFor="nda">
                  Include Copy of a Non-Disclosure Agreement
                </label>
              </div>

              <div className="captcha">
                <span>5 + 6 =</span>
                <input type="text" placeholder="Enter result" />
              </div>

              <button type="submit" className="submit-button">
                Request Proposal
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
