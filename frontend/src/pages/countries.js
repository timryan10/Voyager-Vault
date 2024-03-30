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
      <div className="homeBlock countriesDiv" style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        objectFit: 'contain' 
      }}>
        <h4 className="search-h4">Endless possibilities. See what awaits you!</h4>
      </div>

      <div className="block-parent">
        <div className="block-left-color">
          <div className="block-left-child">
            <SearchBar />
          </div>
        </div>
        <div className="block-right-color">
          <div className="block-right-child">
            <div style={{ 
              textAlign: "center", 
              marginTop: "30px", 
              marginBottom: "30px",
            }}>
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
                Pick my next destination.
              </button>
            )}
            </div>
            <div style={{ 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            </div>
          {randomCountry && (
          <div 
            style={{
              // display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className="destination-cards">
              <Card.Body>
              <p className="destination-message">Your next destination is:</p>
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
    </div>
    </div>
  );
};

export default Countries;