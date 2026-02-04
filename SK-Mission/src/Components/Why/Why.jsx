import React from "react";
import "./Why.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaShieldAlt,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

import whyImg from "../../assets/why.webp"; // apni image yaha rakho

const Why = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* TOP SECTION */}
        <div className="why-top">
          {/* Left Content */}
          <div className="why-heading">
            <span className="why-tag">Why Choose Us</span>
            <h2>
              The Reason Parents <br />
              <span>Trust S. K. Mission School</span>
            </h2>
            <p>
              We provide a balanced learning environment that focuses on academic
              excellence, personal growth, and strong moral values to prepare
              students for a successful future.
            </p>
          </div>

          {/* Right Image */}
          <div className="why-image">
            <img src={whyImg} alt="Why Choose Our School" />
          </div>
        </div>

        {/* CARDS */}
        <div className="why-grid">
          <div className="why-card">
            <FaChalkboardTeacher className="why-icon blue" />
            <h4>Experienced Faculty</h4>
            <p>
              Our teachers are highly qualified, dedicated, and committed to
              guiding students with care and modern teaching methods.
            </p>
          </div>

          <div className="why-card">
            <FaUserGraduate className="why-icon green" />
            <h4>Student-Centered Learning</h4>
            <p>
              Every child receives individual attention to grow academically,
              socially, and emotionally with confidence.
            </p>
          </div>

          <div className="why-card">
            <FaSchool className="why-icon purple" />
            <h4>Modern Infrastructure</h4>
            <p>
              Well-equipped classrooms and a positive environment that supports
              effective learning.
            </p>
          </div>

          <div className="why-card">
            <FaShieldAlt className="why-icon red" />
            <h4>Safe & Disciplined Campus</h4>
            <p>
              A secure, disciplined, and respectful atmosphere for stress-free
              learning.
            </p>
          </div>

          <div className="why-card">
            <FaLightbulb className="why-icon orange" />
            <h4>Holistic Development</h4>
            <p>
              Equal focus on academics, creativity, sports, and character
              building.
            </p>
          </div>

          <div className="why-card">
            <FaHandsHelping className="why-icon teal" />
            <h4>Strong Parent Support</h4>
            <p>
              Transparent communication and collaboration with parents for
              student success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
