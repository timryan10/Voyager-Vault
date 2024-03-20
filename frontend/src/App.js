import {Link, Route, Routes] from "react-router-dom";
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/destination";
import Destination from "./pages/wishlist";

import function App() {
  return (
    <div className="App">
      <header>
        <h1 className="main-title">The Voyagers Vault</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/countries">Countries</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/destination">Destination</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
