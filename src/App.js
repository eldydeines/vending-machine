import VendingMachine from './VendingMachine';
import Coke from './Coke';
import Snickers from './Snickers';
import Chips from './Chips';
import Navbar from './Navbar';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/coke">
          <Coke />
        </Route>
      </BrowserRouter>
    </div >
  );
}

export default App;
