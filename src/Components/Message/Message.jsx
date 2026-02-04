import React from "react";
import "./Message.css";
import directorPic from "../../assets/Director.avif"; // Director image
import principalPic from "../../assets/Principal.png"; // Principal image

const Message = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        {/* Director's Message */}
        <div className="message-card">
          <div className="message-header">
            <img src={directorPic} alt="Director Ajay Sinha" className="message-img" />
            <h2 className="message-title">Director's Message</h2>
            <h3 className="message-name">Ajay Sinha</h3>
          </div>
          <p className="message-text">
            At S. K. Mission School, we envision education as a holistic journey 
            that goes far beyond textbooks. We aim to nurture curiosity, foster 
            creativity, and develop strong character in every student. Our mission 
            is to guide young minds to excel academically, socially, and morally, 
            preparing them to become responsible, confident, and compassionate 
            leaders of tomorrow. By integrating innovative teaching methods with 
            moral values, we empower students to face challenges confidently and 
            seize opportunities to grow into remarkable individuals.
          </p>
        </div>

        {/* Principal's Message */}
        <div className="message-card">
          <div className="message-header">
            <img src={principalPic} alt="Principal Anubhav Kirti" className="message-img" />
            <h2 className="message-title">Principal's Message</h2>
            <h3 className="message-name">Anubhav Kirti</h3>
          </div>
          <p className="message-text">
            Education is not just about learning facts; it is about shaping 
            individuals for life. At S. K. Mission School, we strive to create 
            an environment where students are encouraged to think critically, 
            explore fearlessly, and act ethically. Our aim is to cultivate 
            resilience, empathy, and leadership qualities in each child, ensuring 
            they grow into confident and capable individuals. By combining 
            innovation, values, and personalized guidance, we prepare students 
            to thrive academically, socially, and ethically in a constantly evolving world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;
