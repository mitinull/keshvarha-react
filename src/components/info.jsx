import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const { id: code } = useParams();

  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    setInfo(data[0]);
    setIsLoading(false);
    console.log(data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="info">
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <div className="info__flag-box">
            <img
              className="info__flag"
              src={info.flags.svg}
              alt="Country flag"
            />
          </div>
          <div className="info__text-box">
            <h2 className="info__name">{info.name.common}</h2>
            <ul className="info__list">
              <li className="info__item">
                <span className="info__key">Native Name: </span>
                <span>{info.name.common}</span>
              </li>
              <li className="info__item">
                <span className="info__key">Population: </span>
                <span>{info.population}</span>
              </li>
              <li className="info__item">
                <span className="info__key">Region: </span>
                <span>{info.region}</span>
              </li>
              <li className="info__item">
                <span className="info__key">Sub Region: </span>
                <span>{info.subregion}</span>
              </li>
              <li className="info__item"> 
                <span className="info__key">Capital: </span>
                <span>{info.capital}</span>
              </li>
              <li className="info__item">&nbsp;</li>
              <li className="info__item">
                <span className="info__key">Top Level Domain: </span>
                <span>{info.tld}</span>
              </li>
              <li className="info__item">
                <span className="info__key">Currencies: </span>
                <span>
                  {Object.values(info.currencies)
                    .map((obj) => obj.name)
                    .join(", ")}
                </span>
              </li>
              <li className="info__item">
                <span className="info__key">Languages: </span>
                <span>{Object.values(info.languages).join(", ")}</span>
              </li>
            </ul>
          </div>
          <div className="borders">
            <h3 className="borders__heading">Border Countries:</h3>
            <ul className="borders__list">
              <li className="borders__item">spain</li>
              <li className="borders__item">purtegal</li>
              <li className="borders__item">poland</li>
              <li className="borders__item">spain</li>
              <li className="borders__item">poland</li>
              <li className="borders__item">germany</li>
            </ul>
          </div>
        </>
      )}
    </main>
  );
};

export default Info;
