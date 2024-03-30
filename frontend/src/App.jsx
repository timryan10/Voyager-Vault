import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/wishlist";
import Destination from "./pages/destinations";
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {

  const userId = localStorage.getItem('userId')
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/countries"} element={<Countries />} />
        <Route path={"/destination"} element={<Destination />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
