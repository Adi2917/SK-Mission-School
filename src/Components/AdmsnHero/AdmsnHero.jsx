import { useState } from "react";
import "./AdmsnHero.css";

const AdmsnHero = () => {
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      fullName: form.fullName.value.trim(),
      fatherName: form.fatherName.value.trim(),
      mobile: form.mobile.value.trim(),
      email: form.email.value.trim(),
      address: form.address.value.trim(),
      className: form.className.value,
      dateTime: new Date().toLocaleString(),
    };

    /* ✅ BEAUTIFUL POPUP (NO DELAY) */
    setToast(true);
    setTimeout(() => setToast(false), 3000);

    form.reset();
    setShowForm(false);

    /* 🔥 Background Google Sheet save */
    fetch(
      "https://script.google.com/macros/s/AKfycbyRwpG8oqNDIFzWc0T7wQVibuG5hv4TdDV6R0WzLHk-LX5nXrZRrHUKfyUeyKRhjlzqyQ/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    ).catch(() => {});
  };

  return (
    <>
      {/* 🔔 TOP POPUP */}
      {toast && (
        <div className="toast-popup">
          ✅ Form submitted successfully! <br />
          Please wait for our call & message.
        </div>
      )}

      {/* HERO */}
      <section className="admission-hero">
        <div className="balloons">
          <span className="balloon b1"></span>
          <span className="balloon b2"></span>
          <span className="balloon b3"></span>
          <span className="balloon b4"></span>
        </div>

        <div className="admission-content">
          <h1>
            Admission <span>Open</span>
          </h1>

          <p className="tagline">
            Build your child’s future with quality education, discipline and
            values at <strong>S.K. Mission School</strong>.
          </p>

          <button onClick={() => setShowForm(true)}>
            Apply for Admission
          </button>
        </div>
      </section>

      {/* FORM */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-box">
            <span className="close" onClick={() => setShowForm(false)}>
              ×
            </span>

            <h2>Admission Form</h2>

            <form onSubmit={handleSubmit}>
              <input name="fullName" placeholder="Student Full Name" required />
              <input name="fatherName" placeholder="Father's Name" required />

              <input
                name="mobile"
                placeholder="Mobile Number"
                maxLength="10"
                pattern="[0-9]{10}"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />

              <textarea
                name="address"
                placeholder="Full Address"
                required
              />

              <select name="className" required>
                <option value="">Select Class</option>
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>

              <button type="submit">Submit Form</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmsnHero;
