import "./AdmsnMiddle.css";

const AdmsnMiddle = () => {
  return (
    <section className="admsn-middle">
      <div className="admsn-container">

        {/* LEFT CONTENT */}
        <div className="admsn-left">
          <h2>
            Why Parents <span>Choose Us</span>
          </h2>

          <p className="intro">
            Admission is not just about enrolling a child, it’s about choosing
            the right environment where values, discipline, confidence and
            knowledge grow together.
          </p>

          <p>
            At <strong>S.K. Mission School</strong>, we focus on holistic
            development — academic excellence, moral values, creative thinking
            and physical growth.
          </p>

          <p>
            Our experienced teachers, structured curriculum and student-friendly
            atmosphere ensure that your child feels safe, confident and inspired
            every day.
          </p>

          <div className="admsn-highlights">
            <div><span>✓</span> Qualified & Caring Faculty</div>
            <div><span>✓</span> Safe & Disciplined Campus</div>
            <div><span>✓</span> Academic + Moral Growth</div>
            <div><span>✓</span> Regular Parent Communication</div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="admsn-right">
          <div className="info-box">
            <h3>Admissions Open For</h3>
            <p className="class-range">Nursery to Class 10</p>

            {/* FIXED LINE */}
            <span className="info-divider"></span>

            <p className="note">
              Limited seats available. Early admission ensures better planning,
              personal attention and a smooth academic start for your child.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdmsnMiddle;
