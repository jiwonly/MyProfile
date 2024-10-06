import "./About.css";
import AboutData from "./AboutData";
import emoji2 from "../assets/emoji2.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_title">
        <h2>ABOUT</h2>
        <div className="about_content">
          <div className="about_left">
            <img className="profile_img" src={emoji2} alt="profile" />
            <h4>JUN JI WON</h4>
            <div className="about_left_info">
              <p>📞 010-0000-5575</p>
              <p>📧 ysjjw2003@naver.com</p>
              <p>📍 Seoul</p>
            </div>
          </div>
          <div className="about_right">
            <AboutData
              title={"EDUCATION"}
              content={"성균관대학교 수학교육과 22학번"}
            />
            <AboutData
              title={"SKILLS"}
              content={
                "Python, C, C++, Java, Javascript, HTML, CSS, React, Node.js, express.js"
              }
            />
            <AboutData title={"WORK"} content={"TAVE, Skudding"} />
            <AboutData title={"PROJECTS"} content={"Todolist, Emotion Diary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
