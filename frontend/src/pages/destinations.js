import React, { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Confetti from "react-confetti"
import Footer from '../components/Footer'

function Destination() {
  const [randomCountry, setRandomCountry] = useState(null)
  const [results, setResults] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [showMessage, setShowMessage] = useState(false)



  const generateRandomCountry = () => {
    if (results.length > 0 && !isButtonDisabled) {
      const randomIndex = Math.floor(Math.random() * results.length)
      const selectedCountry = results[randomIndex]
      setRandomCountry(selectedCountry)
      setIsButtonDisabled(true)
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 5000)
    }
  }
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    };

    fetchCountries()
  }, [])
  
return (
    <div>
      <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          {!randomCountry && !showMessage && (
            <div>
              <p className="destination-title">
                Choosing a destination for your next vacation can be challenging
              </p>
              <p className="destination-message">Let us help you</p>
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
                <a href="javascript: location.reload();">CLick to try again!</a>
              </Card.Body>
            </Card>
          </div>
        )}
        {randomCountry && <Confetti />}
      </div>
    </div>
  )
}

export default Destination

