import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

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
                            {/* Add more details as needed */}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
