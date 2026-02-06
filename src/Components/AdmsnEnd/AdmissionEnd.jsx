import React, { useState } from "react";
import "./AdmissionEnd.css";
import {
  FaSchool,
  FaUserGraduate,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaBook,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const AdmissionEnd = () => {
  const [toast, setToast] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const showToast = (type, msg) => {
    setToast({ show: true, type, msg });
    setTimeout(() => {
      setToast({ show: false, type: "", msg: "" });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 INSTANT SUCCESS POPUP (NO WAIT)
    showToast("success", "Enquiry submitted successfully!");

    const formData = new FormData(e.target);

    // Background me Google Sheet ko bhej do
    fetch(
      "https://script.google.com/macros/s/AKfycbw0iMbtZwQ8O_Xe_bCuCl7-OZ4of3BB3s-gV_uBHEAyOdmq47GpTboS6IwppURFuX5G/exec",
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
      {/* TOP POPUP */}
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.type === "success" ? (
            <FaCheckCircle />
          ) : (
            <FaTimesCircle />
          )}
          <span>{toast.msg}</span>
        </div>
      )}

      <section className="admission-section">
        {/* LEFT */}
        <div className="admission-info">
          <h2>
            <FaSchool /> Admissions Open 2026–27
          </h2>

          <p className="intro">
            A modern, disciplined and safe school environment focused on
            academic excellence and overall student growth.
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <FaChalkboardTeacher />
              <h4>Smart Learning</h4>
              <p>Digital classrooms & trained teachers</p>
            </div>

            <div className="feature-card">
              <FaShieldAlt />
              <h4>Safe Campus</h4>
              <p>CCTV & disciplined environment</p>
            </div>

            <div className="feature-card">
              <FaBook />
              <h4>Facilities</h4>
              <p>Library, labs, sports & activities</p>
            </div>

            <div className="feature-card">
              <FaUserGraduate />
              <h4>Growth</h4>
              <p>Academic + personality development</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="admission-form">
          <h3>Admission Enquiry</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="student_name"
              placeholder="Student Name"
              required
            />

            <input
              type="text"
              name="father_name"
              placeholder="Father's Name"
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
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Full Address"
              required
            />

            <select name="class" required>
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>

            <button type="submit">
              <FaPaperPlane /> Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AdmissionEnd;
