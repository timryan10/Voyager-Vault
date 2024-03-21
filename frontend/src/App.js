import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import './index.css';
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/wishlist";
import Destination from "./pages/destinations";

function App() {

import {Link, Route, Routes] from "react-router-dom";
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/destination";
import Destination from "./pages/wishlist";

import function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
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
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/countries"} element={<Countries />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
