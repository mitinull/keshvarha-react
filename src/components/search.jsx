// import icon from '../images/sprite.svg'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <form action="#" className="search">
      <input
        autoFocus
        type="text"
        className="search__input"
        placeholder="Search for a country..."
      />
      <button className="search__button">
        <BiSearch className='search__icon'/>
      </button>
    </form>
  );
};

export default Search;
