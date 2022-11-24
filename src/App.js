import "./App.scss";
import Header from "./components/header";
import Cards from "./components/cards";
import Fields from "./components/fields";
import Pagination from "./components/pagination";
import ProductContext from "./contexts/countries.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([
    { name: "G", population: "1234", region: "e", capital: "be" },
    { name: "a", population: "9999", region: "d", capital: "hi" },
    { name: "a", population: "9999", region: "d", capital: "hi" },
  ]);

  const getData = async () => {
    try {
      // setCountries();
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data.slice(0, 10));
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider value={{ countries: countries }}>
        <Header />
        <Fields />
        <Cards />
        <Pagination />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
