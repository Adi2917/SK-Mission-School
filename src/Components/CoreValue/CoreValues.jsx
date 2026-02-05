import {
  FaGavel,
  FaBalanceScale,
  FaHandshake,
  FaAward,
  FaHandsHelping,
} from "react-icons/fa";
import "./CoreValues.css";

const CoreValues = () => {
  return (
    <section className="core-values-section">
      {/* HEADING */}
      <div className="core-heading">
        <h2>Our Core Values</h2>
        <p>
          At S. K. Mission School, our values shape character, guide actions,
          and inspire lifelong excellence in every student.
        </p>
      </div>

      {/* VALUES GRID */}
      <div className="core-values-grid">
        <div className="core-value">
          <FaGavel className="core-icon discipline" />
          <h3>Discipline</h3>
          <p>
            We cultivate self-control, punctuality, and responsibility to build
            strong character and focus.
          </p>
        </div>

        <div className="core-value">
          <FaBalanceScale className="core-icon integrity" />
          <h3>Integrity</h3>
          <p>
            Honesty, fairness, and ethical behavior guide every action inside
            and outside the classroom.
          </p>
        </div>

        <div className="core-value">
          <FaHandshake className="core-icon respect" />
          <h3>Respect</h3>
          <p>
            We promote mutual respect for teachers, peers, and society,
            fostering harmony and dignity.
          </p>
        </div>

        <div className="core-value">
          <FaAward className="core-icon excellence" />
          <h3>Excellence</h3>
          <p>
            Continuous improvement and high standards drive academic and
            personal success.
          </p>
        </div>

        <div className="core-value">
          <FaHandsHelping className="core-icon responsibility" />
          <h3>Responsibility</h3>
          <p>
            Students learn accountability, leadership, and commitment toward
            community and nation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
