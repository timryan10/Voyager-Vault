import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Confetti from 'react-confetti';

function Destination() {
  const [randomCountry, setRandomCountry] = useState(null);
  const [results, setResults] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();
  }, []);

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

  return (
    <div>
      <NavBar />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p className='destination-title'>Choosing a destination for your next vacation can be challenging</p>
        <p className='destination-message'>Let us help you</p>
        <Button type="button" className='destination-button' disabled={isButtonDisabled} onClick={generateRandomCountry}>Pick my next destination</Button>
        {showMessage && <p className='destination-message'></p>}
      </div>


      {randomCountry && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Card className="destination-cards" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{randomCountry.name.common}</Card.Title>
              {randomCountry.flags && <Card.Img variant="top" src={randomCountry.flags.svg} alt="Flag" />}
              <Card.Text>Capital: {randomCountry.capital}</Card.Text>
              <Card.Text>Population: {randomCountry.population}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
      {randomCountry && <Confetti />}
    </div>
  );
}

export default Destination;
