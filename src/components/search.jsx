// import icon from '../images/sprite.svg'
import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CountriesContext from "../contexts/countries";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setCountries, countries, allCountries } = useContext(CountriesContext);
  const changeInputHandler = (e) => {
    setSearchValue(e.target.value);
    const filtered = allCountries.filter((country) => country.name.common == e.target.value)

    setCountries( filtered
    );
    console.log(e.target.value);
  }
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
