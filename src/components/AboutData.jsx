import "./AboutData.css";

const AboutData = ({ title, content }) => {
  return (
    <div className="aboutData">
      <h4>{title}</h4>
      <div className="aboutData_content">{content}</div>
    </div>
  );
};

export default AboutData;
