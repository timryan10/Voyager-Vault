import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './index.css';
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/wishlist";
import Destination from "./pages/destinations";
import SignUp from './forms/SignUpForm';


function App() {
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
            <li><Link to="/SignUp">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path={'/SignUp'} element={<SignUp />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/countries"} element={<Countries />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
