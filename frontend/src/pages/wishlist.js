import React from 'react';
import { useState, useEffect } from 'react';
import { generalRequest } from '../httpService';
import Button from 'react-bootstrap/Button';

const Wishlist = () => {
  const [data, setData] = useState([])
  const userId = localStorage.getItem("userId")

  useEffect(() => {

    if (userId !== '' || userId !== undefined) {

      const fetchWishlist = async () => {
        const { data } = await generalRequest.get(`/country/wishlist/add/${userId}`)
        setData(data)
      }
      fetchWishlist()
    }
  }, [])

  const deleteCountry = async () => {
    try {
      const response = await fetch(`/country/wishlist/delete/:id`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(response.ok){
        const data = await response.json();
        console.log(data.message)
      }else {
        const errorMessage = await response.json()
        console.log(errorMessage.messgage)
      }
    } catch (error) {
      console.error('Error deleting from wishlist:', error);
    }
}

  return (
    <div>
      <div className="homeBlock">
        <a href="/pages/destinations"><img className="subpage-image" src="https://images.squarespace-cdn.com/content/v1/5f0780262fb7130a5ea990a7/1609721381739-1W27VHBAJHCN4W69TRGT/travel-list-banner.png?format=2500w" alt="Wishlist from postcardsfromaplanner.com" /></a>
      </div>
      <h3></h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
          margin: "40px",
        }}
      >
      {data?.map((wish) => (
        <div className="card wishlist-results" style={{ width: '20rem' }}>
          <div className="card-body">
            <h5 className="card-title">{wish.name}</h5>
            <img src={wish.flag} alt={wish.name} style={{ width: '18rem' }} />
            <p>Population: {wish.population}</p>
            <p>Capital: {wish.capital}</p>
            <Button onClick={deleteCountry} className="formButton" variant="danger">Delete</Button>
        </div>
      </div>
      ))
      }
      </div>
    </div>   
  );
}


export default Wishlist;