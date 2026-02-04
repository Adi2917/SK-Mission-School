import "./Footer.css";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.jfif"; // apna logo yaha rakho

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <img src={logo} alt="S K Mission School" className="footer-logo" />
          <p>
            S. K. Mission School is committed to quality education,
            discipline, and holistic development of students.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://wa.me/919470466665" target="_blank"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="mailto:contact@skmissionschool.edu.in"><FaEnvelope /></a>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/facilities">Facilities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            📍 Kamal Deo Path, Rajnikant Colony,<br />
            Rajni Chowk, Purnia, Bihar 854301
          </p>
          <p>📞 094704 66665</p>
          <p>✉️ contact@skmissionschool.edu.in</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} S. K. Mission School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
