import "./Hero.css";

import emoji1 from "../assets/emoji1.png";

const Hero = () => {
  return (
    <div>
      <div className="Hero">
        <h3>안녕하세요!</h3>
        <h3>제 이름은 전지원입니다.</h3>
        <h3>소통하는 개발자가 되고 싶어요.</h3>
        <img src={emoji1} alt="emoji1" />
      </div>
    </div>
  );
};

export default Hero;
