const Search = () => {
  return (
    <form action="#" className="search">
      <input
        autofocus
        type="text"
        className="search__input"
        placeholder="Search for a country..."
      />
      <button className="search__button">
        <img className="search__icon" src="./sprite.svg#icon-search"/>
      </button>
    </form>
  );
};

export default Search;
