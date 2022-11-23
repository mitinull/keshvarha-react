import Card from "./card";

const Cards = () => {
  return (
    <main className="cards">
      <ul className="cards__list">
        <Card />
        {/* next line for responsive when there is 1 or 2 card in the page! */}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
};

export default Cards;
