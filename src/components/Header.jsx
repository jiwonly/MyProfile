import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const nav = useNavigate();

  return (
    <div className="header">
      <div className="header_left">
        <Link to="/" onClick={scrollToTop}>
          PORTFOLIO
        </Link>
      </div>
      <div className="header_right">
        <a
          onClick={() => {
            nav("/");
          }}
          href="#about"
        >
          ABOUT
        </a>
        <a
          onClick={() => {
            nav("/");
          }}
          href="#goal"
        >
          GOAL
        </a>

        <Link to="/contact" onClick={scrollToTop}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
