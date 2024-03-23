import React, { useState } from 'react';

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <div>
                {results.map((country) => (
                    <div key={country.name.common}>
                        <h2>{country.name.common}</h2>
                        {country.flags && <img src={country.flags.svg} alt="Flag" />}
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        {/* Add more details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
