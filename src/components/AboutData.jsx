import "./AboutData.css";

const AboutData = ({ title, content }) => {
  return (
    <div className="aboutData">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default AboutData;
