import React, { useState, useContext } from 'react';
import { CurrentUser } from "../contexts/CurrentUser";
import CountryCard from './CountryCard';
import axios from 'axios';
import { generalRequest } from '../httpService';

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

            const data = {
                userId: currentUser._id,
                name: country?.name?.common,
                capital: country?.capital[0],
                population: country?.population,
                flag: country?.flags.svg
            }

            // Send a request to your backend API
            const response = await generalRequest.post('/country/wishlist/add', data);        
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };

    const handleAddToDestinations = async (country) => {
        try {
            const data = {
                userId: currentUser._id,
                name: country?.name?.common,
                capital: country?.capital[0],
                population: country?.population,
                flag: country?.flags.svg
            }
            // Send a request to your backend API
            const response = await generalRequest.post('/country/destination/add', data);
        } catch (error) {
            console.error('Error adding to destination:', error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                borderWidth: "1px solid white"
            }}>
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
