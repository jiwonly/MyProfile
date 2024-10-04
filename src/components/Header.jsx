import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="header_right">
        <a href="#">ABOUT</a>
        <a href="#">GOAL</a>
      </div>
    </div>
  );
};

export default memo(Header);
