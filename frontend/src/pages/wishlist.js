//import React from 'react';
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react';
import { generalRequest } from '../httpService';
import SearchBar from '../components/SearchBar';
//import { CurrentUser } from '../contexts/CurrentUser';



const Wishlist = () => {
  const [data, setData] = useState([])
  //const { currentUser } = useContext(CurrentUser);
  const userId = localStorage.getItem("userId")


  console.log(userId, "userId")


  useEffect(() => {

    if (userId !== '' || userId !== undefined) {

      const fetchWishlist = async () => {
        const { data } = await generalRequest.get(`/country/wishlist/add/${userId}`)
        console.log(data)
        setData(data)

      }
      fetchWishlist()
    }


  }, [])

    return (
      <div>
        <div className="homeBlock">
          <a href="/pages/destinations"><img className="subpage-image" src="https://images.squarespace-cdn.com/content/v1/5f0780262fb7130a5ea990a7/1609721381739-1W27VHBAJHCN4W69TRGT/travel-list-banner.png?format=2500w" alt="Wishlist from postcardsfromaplanner.com" /></a>
        </div>
        <h3>Cute tagline goes here!</h3>
        <SearchBar />
        {data?.map((dest) => (
  
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
              <h5 className="card-title">{dest.name}</h5>
              <img src={dest.flag} alt={dest.name} style={{ width: '18rem' }} />
              <p>Population: {dest.population}</p>
              <p>Capital: {dest.capital}</p>
              {/* Other details about the country */}
            </div>
            <div>
              <Footer />
              </div>
          </div>
        ))
        }
      </div>
    );
}


export default Wishlist;

