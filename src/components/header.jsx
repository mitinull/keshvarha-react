import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import CountriesContext from "../contexts/countries";

const Header = () => {
  const { theme, setTheme } = useContext(CountriesContext);
  function darkModeClickHandler() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <header className="header">
      <h1 className="header__heading">Where in the world?</h1>
      <button className="btn-dark-mode" onClick={darkModeClickHandler}>
        <FaRegMoon className="btn-dark-mode__icon" />
        <span className="btn-dark-mode__text">Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
