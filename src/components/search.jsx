// import icon from '../images/sprite.svg'
import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CountriesContext from "../contexts/countries";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setCountries, allCountries, setPage } = useContext(CountriesContext);
  const changeInputHandler = (e) => {
    setSearchValue(e.target.value);
    setPage(1);
    const filtered = e.target.value
      ? allCountries.filter((country) => country.name.common == e.target.value)
      : allCountries;

    setCountries(filtered);
    console.log(e.target.value);
  };
  return (
    <form action="#" className="search">
      <input
        autoFocus
        type="text"
        className="search__input"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={changeInputHandler}
      />
      <button className="search__button">
        <BiSearch className="search__icon" />
      </button>
    </form>
  );
};

export default Search;
