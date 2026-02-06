import "./Class.css";
import { FaChild, FaBookReader, FaSchool, FaGraduationCap } from "react-icons/fa";

const Class = () => {
  return (
    <section className="class-section">
      {/* Heading */}
      <div className="class-header">
        <h2>
          Our <span>Academic Classes</span>
        </h2>
        <p>
          We provide quality English-medium education with a strong academic
          foundation, modern teaching methods, and a caring learning
          environment fof every child.
        </p>
      </div>

      {/* Classes Grid */}
      <div className="class-grid">
        <div className="class-box">
          <FaChild className="class-icon" />
          <h3>Nursery</h3>
          <p>
            A joyful start to learning through play-based activities, creativity,
            and basic communication skills.
          </p>
        </div>

        <div className="divider"></div>

        <div className="class-box">
          <FaBookReader className="class-icon" />
          <h3>LKG</h3>
          <p>
            Building early literacy, numeracy, and social skills in a friendly
            and encouraging environment.
          </p>
        </div>

        <div className="divider"></div>

        <div className="class-box">
          <FaSchool className="class-icon" />
          <h3>UKG</h3>
          <p>
            Preparing students for formal schooling with confidence,
            discipline, and strong basics.
          </p>
        </div>

        <div className="divider"></div>

        <div className="class-box">
          <FaGraduationCap className="class-icon" />
          <h3>Class 1 – 10</h3>
          <p>
            Comprehensive academic learning with focus on concepts,
            discipline, personality development, and future readiness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Class;
