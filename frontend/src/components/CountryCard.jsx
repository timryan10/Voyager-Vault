import React from 'react';

function CountryCard({ country, handleAddToWishlist, handleAddToDestinations }) {
    return (
        <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <img src={country.flags.svg} alt={country.name.common} style={{ width: '18rem' }} />
                <p>Population: {country.population}</p>
                <p>Capital: {country.capital}</p>
                {/* Other details about the country */}
                <button className="btn btn-success" onClick={() => handleAddToDestinations(country)}>Add to Destinations</button>
                <button className="btn btn-info" onClick={() => handleAddToWishlist(country)}>Add to Wishlist</button>
            </div>
        </div>
    );
}

export default CountryCard;
