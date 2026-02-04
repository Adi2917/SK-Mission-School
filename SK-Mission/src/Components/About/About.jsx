import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <span className="about-tag">About Us</span>

        <h2>
          A Tradition of Excellence <br />
          in Education
        </h2>

        <div className="about-grid">
          <p>
            S. K. Mission School has been a pillar of quality education,
            nurturing young minds with knowledge, discipline, and strong moral
            values. Our mission is to create a learning environment where
            students grow academically, socially, and emotionally.
          </p>

          {/* center line */}
          <div className="about-center-line"></div>

          <p>
            With experienced educators, modern teaching methods, and a focus on
            character building, we prepare students not just for exams, but for
            life. We believe every child has potential, and our role is to help
            them discover and achieve it with confidence.
          </p>
        </div>

        {/* button under line */}
        <div className="about-btn-wrap">
          <a href="/about" className="about-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
