import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Cards from "./components/cards";
import Fields from "./components/fields";
import Pagination from "./components/pagination";
import Info from "./components/info";
import ProductContext from "./contexts/countries.js";
import { useEffect, useState } from "react";
import axios from "axios";
import BackBtn from "./components/backBtn";
function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("All");

  const getData = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setAllCountries(data.slice(0, 64));
      setCountries(data.slice(0, 64));
      setIsLoading(false);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider
        value={{ allCountries, countries, setCountries, isLoading, page, setPage, region, setRegion }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Fields />
              <Cards />
              <Pagination />
            </Route>
            <Route path="/:id" children={<Info />}>
              <Header />
              <BackBtn />
              <Info />
            </Route>
          </Switch>
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;

{
  /* <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <div>3</div>
      
          </Route>
          <Route path="/about">
          <div>2</div>
      
          </Route>
          <Route path="/dashboard">
            <div>1</div>
          </Route>
        </Switch>
      </Router>
    </div> */
}
