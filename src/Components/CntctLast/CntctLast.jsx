import React, { useState } from "react";
import "./CntctLast.css";
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const CntctLast = () => {
  const [toast, setToast] = useState({ show: false, type: "", msg: "" });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => setToast({ show: false, type: "", msg: "" }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ INSTANT POPUP (NO DELAY)
    showToast("success", "Thank you! We will contact you soon.");

    const formData = new FormData(e.target);

    // 🔥 BACKGROUND SAVE (NO WAIT)
    fetch(
      "https://script.google.com/macros/s/AKfycbzD7eTQE_xXOYU808dxfHZ01y4SRSFG87Czv8UPkFgN0DcGkJHHUjTUvo2Q9dQulI-5oA/exec",
      {
        method: "POST",
        body: formData,
      }
    ).catch(() => {
      showToast("error", "Something went wrong!");
    });

    e.target.reset();
  };

  return (
    <>
      {/* TOAST */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
          <span>{toast.msg}</span>
        </div>
      )}

      <section className="contact-end">
        {/* MAP */}
        <div className="map-box">
          <a
            href="https://www.google.com/maps?q=25.7900196,87.4848842"
            target="_blank"
            rel="noreferrer"
          >
            <div className="map-overlay">
              <FaMapMarkerAlt />
              <span>View School Location on Map</span>
            </div>

            <iframe
              title="School Map"
              src="https://maps.google.com/maps?q=25.7900196,87.4848842&z=15&output=embed"
              loading="lazy"
            ></iframe>
          </a>
        </div>

        {/* CONTENT + FORM */}
        <div className="contact-end-content">
          <h2>Get in Touch With Us</h2>
          <p>
            We are here to assist you with admissions, enquiries and general
            information. Fill out the form and our team will reach you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              maxLength="10"
              pattern="[0-9]{10}"
              required
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />

            <input
              type="text"
              name="address"
              placeholder="Address (Optional)"
            />

            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows="4"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CntctLast;
