import React from "react";
import "./Cntctoptn.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Cntctoptn = () => {
  return (
    <section className="cntct-option-section">
      {/* HEADING */}
      <div className="cntct-option-head">
        <p>
          Feel free to reach us using any of the contact options below for admissions, queries, or support.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="cntct-option-grid">
        <a href="tel:8116360090" className="cntct-card phone">
          <FaPhoneAlt />
          <h4>Call Us</h4>
          <p>Direct conversation with our support team.</p>
        </a>

        <a
          href="https://wa.me/8116360090"
          target="_blank"
          rel="noreferrer"
          className="cntct-card whatsapp"
        >
          <FaWhatsapp />
          <h4>WhatsApp</h4>
          <p>Fast response for quick enquiries.</p>
        </a>

        <a
          href="mailto:example@gmail.com"
          className="cntct-card email"
        >
          <FaEnvelope />
          <h4>Email</h4>
          <p>Send us your questions or documents.</p>
        </a>

        <a
          href="https://www.instagram.com/s.k_mission?igsh=Y3U2dThhZTN5czA1"
          target="_blank"
          rel="noreferrer"
          className="cntct-card instagram"
        >
          <FaInstagram />
          <h4>Instagram</h4>
          <p>Follow us for updates & activities.</p>
        </a>

        <a
          href="https://www.facebook.com/SKmissionschool1995/"
          target="_blank"
          rel="noreferrer"
          className="cntct-card facebook"
        >
          <FaFacebookF />
          <h4>Facebook</h4>
          <p>Connect with our school community.</p>
        </a>

        <a
          href="https://linkedin.com/company/yourpage"
          target="_blank"
          rel="noreferrer"
          className="cntct-card linkedin"
        >
          <FaLinkedinIn />
          <h4>LinkedIn</h4>
          <p>Professional presence & updates.</p>
        </a>
      </div>
    </section>
  );
};

export default Cntctoptn;
