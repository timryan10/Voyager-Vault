import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Destination() {
  const [randomCountry, setRandomCountry] = useState(null);
  const [results, setResults] = useState([]);

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
    if (results.length > 0) {
      const randomIndex = Math.floor(Math.random() * results.length);
      setRandomCountry(results[randomIndex]);
    }
  };

  return (
    <div>
      <div>
            <NavBar />
      </div>
    <div>
      <p className='destination-title'>Choosing a destination for your next vacation can be challenging</p>
      <p className='destination-message'>Let us help you make the right choice</p>
    </div>
      {/* Button to generate a random country */}
      <Button onClick={generateRandomCountry}>Generate Random Country</Button>

      {/* Render the randomly generated country card */}
      {randomCountry && (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{randomCountry.name.common}</Card.Title>
              {randomCountry.flags && <Card.Img variant="top" src={randomCountry.flags.svg} alt="Flag" />}
              <Card.Text>Capital: {randomCountry.capital}</Card.Text>
              <Card.Text>Population: {randomCountry.population}</Card.Text>
              {/* Add more details as needed */}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Destination;
