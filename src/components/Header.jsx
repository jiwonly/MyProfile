import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="nav">
        <a href="#">ABOUT</a>
        <a href="#">GOAL</a>
      </div>
    </div>
  );
};

export default memo(Header);
