import "../App.css";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";

function Header(props) {
  return (
    <div className="header">
      <div>
        {" "}
        <p className="header__logo">devfinder</p>
      </div>
      <div className="header__toggle" onClick={props.onToggleTheme}>
        <p>{props.theme === "light-theme" ? "dark mode" : "light mode"}</p>
        {props.theme === "light-theme" ? <Moon></Moon> : <Sun></Sun>}
      </div>
    </div>
  );
}

export default Header;
