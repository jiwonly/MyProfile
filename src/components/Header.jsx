import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <div className="header_left">
        <Link to="/" onClick={scrollToTop}>
          PORTFOLIO
        </Link>
      </div>
      <div className="header_right">
        <a href="/#about">ABOUT</a>
        <a href="/#goal">GOAL</a>

        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
