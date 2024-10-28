import "./About.css";
import AboutData from "./AboutData";
import emoji2 from "../assets/emoji2.png";
import { useState } from "react";

const About = () => {
  const [like, setLike] = useState(0);

  const onClickButton = () => {
    setLike(like + 1);
  };

  return (
    <div className="about" id="about">
      <div className="about_title">
        <h2>ABOUT</h2>
      </div>
      <div className="about_content">
        <div className="about_left">
          <img className="profile_img" src={emoji2} alt="profile" />
          <h4>JUN JI WON</h4>
          <div className="about_left_info">
            <p>📞 010-0000-5575</p>
            <p>📧 ysjjw2003@naver.com</p>
            <p>📍 Seoul</p>
            <div className="about_left_info_like">
              <button onClick={onClickButton}>
                {like === 0 ? "🤍" : "💗"}
              </button>
              <p>
                {like}
                {like < 2 ? " Like" : " Likes"}
              </p>
            </div>
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
          <AboutData title={"CERTIFICATE"} content={"컴퓨터활용능력 1급"} />
          <AboutData title={"HOBBY"} content={"퍼즐 맞추기, 노래 듣기"} />
        </div>
      </div>
    </div>
  );
};

export default About;
