import "./ContactForm.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("date", date);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxmCDC-eQwvSmbJl0C_2eawuTPwlDalyGJRbjM4O1gYEu6ZWcFWgjrN0zfH26k6pMydkA/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      alert("Thanks for contacting us. Please wait for call and message.");

      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setDate("");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <span className="tag">CONTACT US</span>
          <h2>Let’s Build a Bright Future Together</h2>
          <p>
            S. K. Mission School believes in transparent communication and
            meaningful connections with parents and students.
          </p>

          <div className="stats">
            <div className="stat-box">
              <h3>2000+</h3>
              <span>Happy Students</span>
            </div>
            <div className="stat-box">
              <h3>95%</h3>
              <span>Attendance Rate</span>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <span>Academic Results</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Send Your Enquiry</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/[^0-9]/g, ""))
              }
              maxLength="10"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <textarea
              placeholder="Type your enquiry..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
