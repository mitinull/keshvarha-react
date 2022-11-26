import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CountriesContext from "../contexts/countries";

const Search = () => {
  const { setCountries, allCountries, setPage, searchValue, setSearchValue } = useContext(CountriesContext);
  const changeInputHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form action="#" className="search" onSubmit={submitFormHandler}>
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
