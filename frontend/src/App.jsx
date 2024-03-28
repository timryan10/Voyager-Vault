import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import Home from "./pages/home";
import Countries from "./pages/countries";
import Wishlist from "./pages/wishlist";
import Destination from "./pages/destinations";
import CurrentUserProvider from './contexts/CurrentUser';


function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/countries"} element={<Countries />} />
          <Route path={"/destination"} element={<Destination />} />
          <Route path={"/wishlist"} element={<Wishlist />} />
        </Routes>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
