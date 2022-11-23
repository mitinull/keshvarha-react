const Card = () => {
  return (
    <li className="cards__item">
      <a href="/infoPage(temp).html" className="card">
        <div className="card__flag-box">
          <img
            className="card__flag"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
            alt="Country flag"
          />
        </div>
        <div className="card__text-box">
          <h2 className="card__name">Germany</h2>
          <div className="card__population">
            <span className="card__key">Population:</span> 81,770,900
          </div>
          <div className="card__region">
            <span className="card__key">Region:</span> Europe
          </div>
          <div className="card__capital">
            <span className="card__key">Capital:</span> Berlin
          </div>
        </div>
      </a>
    </li>
  );
};

export default Card;
