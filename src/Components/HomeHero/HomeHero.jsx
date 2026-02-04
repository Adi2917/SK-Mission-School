import React from "react";
import "./HomeHero.css";
import heroImg from "../../assets/homehero.jpg";

const HomeHero = () => {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Shaping Minds, <br />
            Building the Future
          </h1>

          <p>
            S. K. Mission School is committed to nurturing young minds through
            quality education, moral values, discipline, and modern learning.
            We believe that education is not just about books, but about
            character, confidence, and creating responsible citizens for
            tomorrow.
          </p>

          <div className="hero-buttons">
            <a href="/admission" className="hero-btn primary">
              Admission Open
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
