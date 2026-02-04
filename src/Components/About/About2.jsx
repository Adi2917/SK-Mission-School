import React from "react";
import "./About2.css";

const About2 = () => {
  return (
    <section className="about2-section">
      <div className="about2-container">
        <h2 className="about2-title">
          A Tradition of Excellence <br />
          in Education
        </h2>

        <div className="about2-grid">
          <p>
            S. K. Mission School has been a pillar of quality education,
            nurturing young minds with knowledge, discipline, and strong moral
            values. Our mission is to create a learning environment where
            students grow academically, socially, and emotionally.
          </p>

          {/* center line */}
          <div className="about2-center-line"></div>

          <p>
            With experienced educators, modern teaching methods, and a focus on
            character building, we prepare students not just for exams, but for
            life. We believe every child has potential, and our role is to help
            them discover and achieve it with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;
