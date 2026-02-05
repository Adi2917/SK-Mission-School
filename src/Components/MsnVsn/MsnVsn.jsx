import React from "react";
import "./MsnVsn.css";
import { FaBullseye, FaEye } from "react-icons/fa";
import mvImage from "../../assets/msnvsn.webp";

const MsnVsn = () => {
  return (
    <section className="mv-section">
      <div className="mv-wrapper">

        {/* Mission */}
        <div className="mv-box mission">
          <div className="mv-line left"></div>
          <div className="mv-content">
            <span className="mv-icon"><FaBullseye /></span>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide quality education in a disciplined,
              caring, and inclusive environment. We focus on academic excellence,
              moral values, and overall personality development to help students
              grow with confidence and responsibility.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="mv-center">
          <img src={mvImage} alt="Mission Vision" />
        </div>

        {/* Vision */}
        <div className="mv-box vision">
          <div className="mv-line right"></div>
          <div className="mv-content">
            <span className="mv-icon"><FaEye /></span>
            <h2>Our Vision</h2>
            <p>
              Our vision is to shape future-ready learners who are knowledgeable,
              ethical, and socially responsible. We aim to nurture young minds
              with values, skills, and confidence to succeed in life and serve
              society with pride.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MsnVsn;
