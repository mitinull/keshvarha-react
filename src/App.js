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
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      // setCountries();
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data.slice(0, 10));
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
      <ProductContext.Provider value={{ countries, isLoading }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Fields />
              <Cards />
              <Pagination />8
            </Route>
            <Route path="/:id" children={<Info />}>
              <Header />
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
