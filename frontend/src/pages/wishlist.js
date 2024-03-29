import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const Wishlist = () => {
  return (
    <div> 
      <div>
        <NavBar />
      </div>
      <div className="homeBlock">
        <a href="/pages/destinations"><img className="subpage-image" src="https://images.squarespace-cdn.com/content/v1/5f0780262fb7130a5ea990a7/1609721381739-1W27VHBAJHCN4W69TRGT/travel-list-banner.png?format=2500w" alt="Wishlist from postcardsfromaplanner.com" /></a>
      </div>
      <h3>Cute tagline goes here!</h3>
      <div>
      <Footer />
      </div>
    </div>  
   
  );
}


export default Wishlist;

