import { useContext, useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CONTINENTS } from "../config";
import queryString from "query-string";
import CountriesContext from "../contexts/countries";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { region, setRegion } = useContext(CountriesContext);

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
        <span>{region}</span>
        <BiChevronDown className="select__icon-down" />
      </div>
      {isOpen && (
        <ul className="select__options">
          {CONTINENTS.map((cont, i) => (
            <li
              key={i}
              className="select__option"
              onClick={() => {
                setRegion(cont);
                setIsOpen(false);
              }}
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
