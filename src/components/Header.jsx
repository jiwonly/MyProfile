import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="title">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="nav">
        <div className="nav_about">
          <h4>ABOUT</h4>
        </div>

        <div className="nav_goal">
          <h4>GOAL</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
