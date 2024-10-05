import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <a href="#home">PORTFOLIO</a>
      </div>
      <div className="header_right">
        <a href="#about">ABOUT</a>
        <a href="#goal">GOAL</a>
      </div>
    </div>
  );
};

export default memo(Header);
