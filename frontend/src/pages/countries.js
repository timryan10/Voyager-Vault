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

//You need to set up your front end to take in an input, and then have a button that will POST that input to your server. Your server should have a POST endpoint that will take that data and do an INSERT into your database. I forget if you're working with SQL or noSQL. But usually it's a Model.create(data) command.
