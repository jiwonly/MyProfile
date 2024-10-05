import "./Hero.css";

import emoji1 from "../assets/emoji1.png";

const Hero = () => {
  return (
    <div>
      <div className="Hero" id="home">
        <h2>안녕하세요!</h2>
        <h2>제 이름은 전지원입니다.</h2>
        <h2>소통하는 개발자가 되고 싶어요.</h2>
        <img src={emoji1} alt="emoji1" />
      </div>
    </div>
  );
};

export default Hero;
