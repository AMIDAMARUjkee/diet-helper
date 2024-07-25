import logo from "../assets/diet_icon.svg";
import "../styles/layouts/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Website Logo" className="header__logo" />
      <nav className="header__navbar">
        <ul className="header__navbar-list">
          <li>Calories calculator</li>
          <li>Meal calories counter</li>
          <li>About us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
