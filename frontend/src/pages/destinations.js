import React from 'react';
import NavBar from '../components/NavBar'

const Destination = () => {
  return (
    <div> 
      <div>
            <NavBar />
      </div>
      <div className="homeBlock">
        <a href="/pages/destinations"><img className="rounded-circle subpage-image" src="https://t4.ftcdn.net/jpg/03/08/38/83/360_F_308388341_kzxK7d31ZYO7FmBClxJmYuZZb6dn6a3g.jpg" alt="Tourist images from adobe stock photos" /></a>
      </div>
      <h3>Cute tagline goes here!</h3>
    </div>  
  );
}

export default Destination;
