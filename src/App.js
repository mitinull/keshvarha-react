import logo from './logo.svg';
import './App.scss';
import Header from './components/header';
import Cards from './components/cards';
import Fields from './components/fields';

function App() {
  return (
    <div className="App">
      <Header />
      <Fields />
      <Cards />
    </div>
  );
}

export default App;
