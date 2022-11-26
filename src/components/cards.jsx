import { useContext, useEffect } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { CARD_PER_PAGE } from "../config";
import CountriesContext from "../contexts/countries";
import Card from "./card";

const Cards = () => {
  const {
    allCountries,
    countries,
    setCountries,
    isLoading,
    page,
    setPage,
    region,
    searchValue,
  } = useContext(CountriesContext);

  useEffect(() => {
    filterCountries();
    setPage(1);
  }, [region, searchValue]);

  function filterCountries() {
    const searchReg = new RegExp(`${searchValue}`, "i");

    // filter searhc
    let filtered = searchValue
      ? allCountries.filter((country) => country.name.common.match(searchReg))
      : allCountries;

    // filter region
    filtered =
      region === "All"
        ? filtered
        : filtered.filter((country) => country.region === region);

    setCountries(filtered);
  }

  return (
    <main className="cards" key={region+searchValue+page}>
      {isLoading ? (
        <BsGlobe2 className="spinner" />
      ) : (
        <ul className="cards__list">
          {countries
            .slice((page - 1) * CARD_PER_PAGE, page * CARD_PER_PAGE)
            .map((card, i) => (
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
