import "./App.scss";
import Header from "./components/header";
import Cards from "./components/cards";
import Fields from "./components/fields";
import Pagination from "./components/pagination";
import ProductContext from "./contexts/countries.js";

function App() {
  return (
    <div className="App">
      <ProductContext.Provider>
        <Header />
        <Fields />
        <Cards />
        <Pagination />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
