import React, { useState, useContext } from 'react';
import CountryCard from './CountryCard';
import axios from 'axios';
import { CurrentUser } from "../contexts/CurrentUser";

function SearchBar() {
    const { currentUser } = useContext(CurrentUser);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
            setResults(response.data);
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
            // Send a request to your backend API
            console.log("country", country)
            console.log(currentUser)
            const response = await axios.post('http://localhost:5050/country/wishlist/add', { 
                country: {
                    name: country.name.common,
                    capital: country.capital[0],
                    population: country.population,
                    flag: country.flags.png
                },
                userId: currentUser._id,
            });
            // Optionally, update state or show a success message
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            // Optionally, show an error message
        }
    };
    
    const handleAddToDestinations = async (country) => {
        try {
            // Send a request to your backend API
            const response = await axios.post('http://localhost:5050/country/destinations/add', { country });
            // Optionally, update state or show a success message
        } catch (error) {
            console.error('Error adding to destinations:', error);
            // Optionally, show an error message
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
            <div className="row">
                {results.map(country => (
                    <div className="col-md-4" key={country.name.common}>
                        <CountryCard 
                            country={country} 
                            handleAddToWishlist={handleAddToWishlist}
                            handleAddToDestinations={handleAddToDestinations}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;