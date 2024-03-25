import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Import axios for making HTTP requests

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClear = () => {
        setQuery('');
        setResults([]);
    };

    const handleAddToWishlist = async (country) => {
        try {
            // Add to wishlist logic
            console.log('Added to wishlist:', country.name.common);
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };

    const handleAddToDestinations = async (country) => {
        try {
            // Add to destinations logic
            console.log('Added to destinations:', country.name.common);
        } catch (error) {
            console.error('Error adding to destinations:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={query} onChange={handleChange} className="form-control" placeholder="Search for a country..." />
                    <button type="submit" className="btn btn-primary">Search</button>
                    {query && <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>}
                </div>
            </form>
            <div>
                {results.map((country) => (
                    <Card key={country.name.common} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{country.name.common}</Card.Title>
                            {country.flags && <Card.Img variant="top" src={country.flags.svg} alt="Flag" />}
                            <Card.Text>Capital: {country.capital}</Card.Text>
                            <Card.Text>Population: {country.population}</Card.Text>
                            <Button variant="primary" onClick={() => handleAddToWishlist(country)}>Add to Wishlist</Button>
                            <Button variant="secondary" onClick={() => handleAddToDestinations(country)}>I have been here!</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;


