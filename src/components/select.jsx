import { useContext, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CONTINENTS } from "../config";
import CountriesContext from "../contexts/countries";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { region, setRegion } =
    useContext(CountriesContext);

  const changeRegionHandler = (cont) => {
    setRegion(cont);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   console.log(queryString.parse(props));
  // }, []);

  return (
    <div className="select">
      <div
        className="select__selected"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{region === "All" ? "Select by Region" : region}</span>
        <BiChevronDown className="select__icon-down" />
      </div>
      {isOpen && (
        <ul className="select__options">
          {CONTINENTS.map((cont, i) => (
            <li
              key={i}
              className="select__option"
              onClick={changeRegionHandler.bind(this, cont)}
            >
              {cont}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
