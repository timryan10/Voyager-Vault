<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { generalRequest } from '../httpService';
import SearchBar from '../components/SearchBar';
//import { CurrentUser } from '../contexts/CurrentUser';


const Destination = () => {
  const [data, setData] = useState([])
  //const { currentUser } = useContext(CurrentUser);
  const userId = localStorage.getItem("userId")


  console.log(userId, "userId")


  useEffect(() => {

    if (userId !== '' || userId !== undefined) {

      const fetchDestination = async () => {
        const { data } = await generalRequest.get(`/country/destination/add/${userId}`)
        console.log(data)
        setData(data)

      }
      fetchDestination()
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
        </div>
      ))
      }
    </div>
  );
}

export default Destination;
=======
import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Confetti from "react-confetti"


function Destination() {
  const [randomCountry, setRandomCountry] = useState(null)
  const [results, setResults] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [showMessage, setShowMessage] = useState(false)



  const generateRandomCountry = () => {
    if (results.length > 0 && !isButtonDisabled) {
      const randomIndex = Math.floor(Math.random() * results.length)
      const selectedCountry = results[randomIndex]
      setRandomCountry(selectedCountry)
      setIsButtonDisabled(true)
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 5000)
    }
  }
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };

    fetchCountries()
  }, [])
  
return (
    <div>
      <div className="destinationDiv" style={{ 
        backgroundImage: `url("https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        objectFit: 'contain' 
      }}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          {!randomCountry && !showMessage && (
            <div>
              <p className="destination-title">
                Need a little inspiration?
              </p>
              <p className="destination-message">Let us help you!</p>
            </div>
          )}
          {!randomCountry && (
            <button
              type="button"
              className="btn btn-dark"
              disabled={isButtonDisabled}
              onClick={generateRandomCountry}
            >
              Pick my next destination
            </button>
          )}
          {randomCountry && (
            <p className="destination-message">Your next destination is:</p>
          )}
          {showMessage && <p className="destination-message"></p>}
        </div>

        {randomCountry && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Card className="destination-cards">
              <Card.Body>
                <Card.Title>{randomCountry.name.common}</Card.Title>
                {randomCountry.flags && (
                  <Card.Img
                    variant="top"
                    src={randomCountry.flags.svg}
                    alt="Flag"
                  />
                )}
                <Card.Text>Capital: {randomCountry.capital}</Card.Text>
                <Card.Text>Population: {randomCountry.population}</Card.Text>
                <a href="javascript: location.reload();">Click to try again!</a>
              </Card.Body>
            </Card>
          </div>
        )}
        {randomCountry && <Confetti />}
      </div>
    </div>
  )
}

export default Destination

>>>>>>> fecd7a5e368f89d910c8c38bd2b7b60d7c54758e
