import "./FcltHero.css";
import facilityHeroImg from "../../assets/facility.webp"; // apna image path sahi rakhna

const FcltHero = () => {
  return (
    <section className="facility-hero">
      
      {/* IMAGE SIDE */}
      <div className="facility-hero-img">
        <img src={facilityHeroImg} alt="School Facilities" />
      </div>

      {/* CONTENT SIDE */}
      <div className="facility-hero-content">
        <h1>
          World-Class <span>School Facilities</span>
        </h1>

        <p>
          At S. K. Mission School, we provide a safe, modern, and student-friendly
          environment where learning goes beyond classrooms. Our facilities are
          thoughtfully designed to support academic excellence, physical growth,
          creativity, and overall student well-being.
        </p>

        <p className="hero-highlight">
          A campus built to inspire learning, discipline, and growth.
        </p>
      </div>

    </section>
  );
};

export default FcltHero;
