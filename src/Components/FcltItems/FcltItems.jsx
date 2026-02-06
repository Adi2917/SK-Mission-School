import "./FcltItems.css";

import musicImg from "../../assets/music.webp";
import culturalImg from "../../assets/cultural.webp";
import transportImg from "../../assets/transport.webp";
import debateImg from "../../assets/debate.webp";
import quizImg from "../../assets/quiz.webp";
import activityImg from "../../assets/activity.webp";
import labImg from "../../assets/lab.webp";

const facilities = [
  {
    title: "Music & Performing Arts",
    desc: "Music and performing arts nurture creativity, confidence, emotional expression, and stage presence. Students are guided to explore their talents through structured training and regular performances.",
    img: musicImg,
  },
  {
    title: "Cultural Activities",
    desc: "Cultural programs and celebrations help students understand traditions, values, and diversity, encouraging respect, unity, and social responsibility.",
    img: culturalImg,
  },
  {
    title: "Safe Transportation",
    desc: "A well-organized transport system ensures safe, punctual, and comfortable commuting for students, providing complete peace of mind to parents.",
    img: transportImg,
  },
  {
    title: "Debate & Public Speaking",
    desc: "Debate and speaking activities sharpen logical thinking, communication skills, leadership qualities, and the confidence to express ideas clearly.",
    img: debateImg,
  },
  {
    title: "Quiz & Knowledge Forums",
    desc: "Interactive quizzes and knowledge forums stimulate curiosity, enhance awareness, and build a healthy competitive learning environment.",
    img: quizImg,
  },
  {
    title: "Activity-Based Learning",
    desc: "Hands-on activities encourage practical understanding, creativity, teamwork, and strong problem-solving skills beyond textbooks.",
    img: activityImg,
  },
];

const FcltItems = () => {
  return (
    <section className="facility-wrapper">
      {/* HEADER */}
      <div className="facility-header">
        <h2>
          Facilities at <span>a glance</span>
        </h2>
        <p>
          Our school provides a safe, inspiring, and well-equipped environment
          where students grow academically, socially, and personally.
        </p>
      </div>

      {/* GRID – 6 ITEMS */}
      <div className="facility-grid">
        {facilities.map((item, index) => (
          <div className="facility-item" key={index}>
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <span className="divider"></span>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* LAST ROW */}
      <div className="facility-last-row">
        <div className="facility-item">
          <img src={labImg} alt="Modern Science & Computer Labs" />
          <h4>Modern Science & Computer Labs</h4>
          <span className="divider"></span>
          <p>
            Our advanced science and computer laboratories provide hands-on
            experiments, technical exposure, and digital learning, preparing
            students for higher education and future careers.
          </p>
        </div>

        <div className="facility-highlight">
          <h3>
            Why Our <span>Facilities</span> Matter
          </h3>
          <p>
            A strong learning environment shapes discipline, confidence, and
            lifelong success. At our school, every facility is thoughtfully
            designed to support safety, innovation, creativity, and academic
            excellence—helping children thrive in every aspect of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FcltItems;
