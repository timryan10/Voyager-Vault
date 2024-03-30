import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Confetti from "react-confetti";
import SearchBar from '../components/SearchBar';

const Countries = () => {
  const [randomCountry, setRandomCountry] = useState(null);
  const [results, setResults] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const generateRandomCountry = () => {
    if (results.length > 0 && !isButtonDisabled) {
      const randomIndex = Math.floor(Math.random() * results.length);
      const selectedCountry = results[randomIndex];
      setRandomCountry(selectedCountry);
      setIsButtonDisabled(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <div className="homeBlock">
        <a href="/pages/destinations">
          <img className="rounded-circle subpage-image" src="https://st2.depositphotos.com/3591429/5996/i/450/depositphotos_59969927-stock-photo-different-countries-united-with-flags.jpg" alt="Country flags from depositphoto.com" />
        </a>
      </div>
      <h3>Your possibilities are endless. See what voyages await you!</h3>
      <div className="homeBlock">
        <SearchBar />
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          {!randomCountry && !showMessage && (
            <div>
              <p className="destination-title">Need a little inspiration?</p>
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
  );
};

{/* <div className="destinationDiv" style={{ 
        backgroundImage: url("https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        objectFit: 'contain' 
      }}></div> */}


export default Countries;