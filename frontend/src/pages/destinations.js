import React, { useEffect, useState } from 'react';
import { generalRequest } from '../httpService';
import SearchBar from '../components/SearchBar';
import Button from 'react-bootstrap/esm/Button';

const Destination = () => {
  const [data, setData] = useState([])
  const userId = localStorage.getItem("userId")


  console.log(userId, "userId")

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

  useEffect(() => {

    if (userId !== '' || userId !== undefined) {

      const fetchDestination = async () => {
        const { data } = await generalRequest.get(`/country/destination/add/${userId}`)
        setData(data)
      }
      fetchDestination()
    }
  }, [])
  return (
    <div>
      <div className="homeBlock destinationDiv" style={{
        backgroundImage: 'url("https://media.architecturaldigest.com/photos/6494807c22dde9e2fb285415/16:9/w_2560%2Cc_limit/GettyImages-136509187.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
        marginBottom: '20px',
        marginTop: '0px'
      }}>
      <h2 className="search-h4">Memoirs of voyages past</h2>
      </div>
      <SearchBar />
      <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "50px",
          margin: "40px",
          gap: "10px"
        }}
        >
      {data?.map((dest) => (

        <div className="card" style={{ width: '20rem' }}>
          <div className="card-body">
            <h5 className="card-title">{dest.name}</h5>
            <img src={dest.flag} alt={dest.name} style={{ width: '18rem' }} />
            <p>Population: {dest.population}</p>
            <p>Capital: {dest.capital}</p>
            <Button onClick={deleteCountry} className="formButton" variant="danger">Delete</Button>
          </div>
        </div>
      ))
      }
      </div>
    </div>
  );
}

export default Destination;