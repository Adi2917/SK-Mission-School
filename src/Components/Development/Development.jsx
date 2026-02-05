import "./Development.css";
import {
  FaBookOpen,
  FaUserShield,
  FaRunning,
  FaPaintBrush,
  FaUserTie,
  FaHeart,
} from "react-icons/fa";

/* image imports */
import academicImg from "../../assets/acdgrowth.webp";
import personalityImg from "../../assets/prsnldevelopment.webp";
import sportsImg from "../../assets/sports.webp";
import creativeImg from "../../assets/creative.webp";
import leadershipImg from "../../assets/leadership.jpg";
import moralImg from "../../assets/moral.webp";

const Development = () => {
  return (
    <section className="development-section">

      {/* COLORFUL INTRO */}
      <div className="dev-intro">
        <h2>
          <span>Holistic</span> Student <span>Development</span>
        </h2>
        <p>
          We focus on nurturing young minds through balanced academic learning,
          character building, creativity, leadership, physical fitness, and
          strong moral values to shape confident and responsible individuals.
        </p>
      </div>

      <div className="dev-grid">

        <div className="dev-card blue">
          <img src={academicImg} alt="Academic Growth" />
          <h3>
            <span className="icon"><FaBookOpen /></span>
            Academic Growth
          </h3>
          <p>
            Concept-based English medium education supported by experienced
            teachers, assessments, and disciplined learning methods.
          </p>
        </div>

        <div className="dev-card purple">
          <img src={personalityImg} alt="Personality Development" />
          <h3>
            <span className="icon"><FaUserShield /></span>
            Personality Development
          </h3>
          <p>
            Building confidence, discipline, communication skills, and positive
            attitude essential for lifelong success.
          </p>
        </div>

        <div className="dev-card green">
          <img src={sportsImg} alt="Sports & Fitness" />
          <h3>
            <span className="icon"><FaRunning /></span>
            Sports & Fitness
          </h3>
          <p>
            Physical activities and sports to promote fitness, teamwork,
            leadership, and mental well-being.
          </p>
        </div>

        <div className="dev-card orange">
          <img src={creativeImg} alt="Creative Skills" />
          <h3>
            <span className="icon"><FaPaintBrush /></span>
            Creative Skills
          </h3>
          <p>
            Encouraging creativity through art, music, dance, and innovative
            learning activities.
          </p>
        </div>

        <div className="dev-card teal">
          <img src={leadershipImg} alt="Leadership" />
          <h3>
            <span className="icon"><FaUserTie /></span>
            Leadership
          </h3>
          <p>
            Leadership qualities developed through responsibility, teamwork,
            participation, and guided decision-making.
          </p>
        </div>

        <div className="dev-card brown">
          <img src={moralImg} alt="Moral Education" />
          <h3>
            <span className="icon"><FaHeart /></span>
            Moral Education
          </h3>
          <p>
            Strong moral values like honesty, respect, compassion, and integrity
            to shape ethical and responsible citizens.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Development;
