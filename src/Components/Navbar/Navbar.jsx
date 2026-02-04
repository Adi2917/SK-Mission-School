import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlinePhone,
  HiOutlineBell,
} from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  return (
    <>
      {/* ===== BLUR BACKDROP ===== */}
      {notifyOpen && (
        <div
          className="notification-backdrop"
          onClick={() => setNotifyOpen(false)}
        ></div>
      )}

      {/* ===== NOTIFICATION PANEL ===== */}
      {notifyOpen && (
        <div className="notification-panel">
          <div className="notification-header">
            <h3>Notifications</h3>
            <HiOutlineX
              className="close-icon"
              onClick={() => setNotifyOpen(false)}
            />
          </div>

          <div className="notification-divider"></div>

          <div className="notification-body">
            {/* Future notifications yaha add karna */}
            {<p>No notifications available yet</p> }
          </div>
        </div>
      )}

      <header className="sk-header">
        <nav className="sk-navbar">
          {/* LOGO */}
          <div className="sk-brand">
            <img src={logo} alt="SK Mission Logo" />
            <div className="brand-text">
              <h1>SK Mission</h1>
              <span>School of Excellence</span>
            </div>
          </div>

          {/* MENU */}
          <ul className={`sk-menu ${open ? "open" : ""}`}>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
            <li><NavLink to="/academics" onClick={() => setOpen(false)}>Academics</NavLink></li>
            <li><NavLink to="/facilities" onClick={() => setOpen(false)}>Facilities</NavLink></li>
            <li><NavLink to="/admission" onClick={() => setOpen(false)}>Admission</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>

            {/* MOBILE CONTACT */}
            <div className="sk-mobile-contact">
              <a href="tel:8116360090" className="phone"><HiOutlinePhone /></a>
              <a href="https://wa.me/8116360090" target="_blank" className="whatsapp">
                <RiWhatsappLine />
              </a>
            </div>
          </ul>

          {/* RIGHT ICONS (ALWAYS VISIBLE) */}
          <div className="sk-contact">
            <span
              className="notification-icon"
              onClick={() => setNotifyOpen(true)}
            >
              <HiOutlineBell />
            </span>

            <a href="tel:8116360090" className="phone">
              <HiOutlinePhone />
            </a>

            <a
              href="https://wa.me/8116360090"
              target="_blank"
              className="whatsapp"
            >
              <RiWhatsappLine />
            </a>
          </div>

          {/* TOGGLE */}
          <div className="sk-toggle" onClick={() => setOpen(!open)}>
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
