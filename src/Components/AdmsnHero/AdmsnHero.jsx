import { useState } from "react";
import "./AdmsnHero.css";
import admissionImg from "../../assets/admsopen.png";

const AdmsnHero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      fullName: form.fullName.value,
      fatherName: form.fatherName.value,
      mobile: form.mobile.value,
      email: form.email.value,
      address: form.address.value,
      className: form.className.value,
    };

    await fetch("https://script.google.com/macros/s/AKfycbyRwpG8oqNDIFzWc0T7wQVibuG5hv4TdDV6R0WzLHk-LX5nXrZRrHUKfyUeyKRhjlzqyQ/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Thank you for filling the form. Please wait for our call and message.");
    form.reset();
    setShowForm(false);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="admission-hero"
        style={{ backgroundImage: `url(${admissionImg})` }}
      >
        <div className="admission-overlay">
          <div className="admission-text">
            <h1>
              Admission <span>Open</span>
            </h1>
            <p>
              Secure your child’s future with quality education at
              <strong> S.K. Mission School</strong>.
            </p>
            <p className="sub">
              You can fill the admission form by clicking the button below.
            </p>

            <button onClick={() => setShowForm(true)}>
              Apply for Admission
            </button>
          </div>
        </div>
      </section>

      {/* FORM */}
      {showForm && (
        <div className="form-overlay">
          <div className="form-box">
            <span className="close" onClick={() => setShowForm(false)}>×</span>
            <h2>Admission Form</h2>

            <form onSubmit={handleSubmit}>
              <input name="fullName" placeholder="Student Full Name" required />
              <input name="fatherName" placeholder="Father's Name" required />

              <input
                name="mobile"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
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
