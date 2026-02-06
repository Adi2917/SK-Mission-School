import "./AcdHero.css";
import heroImg from "../../assets/acdhero.jpg"; // image yahan rakhna

const AcdHero = () => {
  return (
    <section
      className="acd-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="acd-overlay"></div>

      <div className="acd-hero-content">
        <h1>Academics at S. K. Mission School</h1>
        <p>
          We deliver a strong academic foundation that blends modern teaching,
          critical thinking, and moral values to prepare students for lifelong
          success.
        </p>
      </div>
    </section>
  );
};

export default AcdHero;
