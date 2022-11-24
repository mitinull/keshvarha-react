import { useContext } from "react";
import { BiGlobe } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import CountriesContext from "../contexts/countries";
import Card from "./card";

const Cards = () => {
  const { countries, isLoading } = useContext(CountriesContext);
  return (
    <main className="cards">
      {isLoading ? (
        // <BiGlobe className="spinner"/>
        <BsGlobe2 className="spinner"/>
      ) : (
        <ul className="cards__list">
          {countries.map((card, i) => (
            <Card card={card} key={i} />
          ))}

          {/* next 4 lines for responsive when there is 1 or 2 card in the page! */}
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </main>
  );
};

export default Cards;
