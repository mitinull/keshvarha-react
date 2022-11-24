import { useContext } from "react";
import CountriesContext from "../contexts/countries";
import Card from "./card";

const Cards = () => {
  const {countries} = useContext(CountriesContext)
  return (
    <main className="cards">
      <ul className="cards__list">
        {countries.map((card, i) => (
          <Card id={i} />
        ))}

        {/* next 4 lines for responsive when there is 1 or 2 card in the page! */}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
};

export default Cards;
