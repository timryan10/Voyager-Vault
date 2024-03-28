import React from 'react';
import SearchBar from '../components/SearchBar';


const Countries = () => {
  return (
    <div> 
      <div className="homeBlock">
        <a href="/pages/destinations"><img className="rounded-circle subpage-image" src="https://st2.depositphotos.com/3591429/5996/i/450/depositphotos_59969927-stock-photo-different-countries-united-with-flags.jpg" alt="Country flags from depositphoto.com" /></a>
      </div>
      <h3>Your possibilities are endless. See what voyages await you!</h3>
      <div className="homeBlock">
        <SearchBar />
      </div>
    </div>  
  );
}

export default Countries;
