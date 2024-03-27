import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import Loading from '../components/loading';

const Destination = () => {
  const [chosenCity, setChosenCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const popularCities = [
    { name: "New York", imageUrl: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Tokyo", imageUrl: "" },
    { name: "Paris", imageUrl: "" },
    { name: "London", imageUrl: "" },
    { name: "Dubai", imageUrl: "" },
    { name: "Singapore", imageUrl: "" },
    { name: "Rome", imageUrl: "" },
    { name: "Bangkok", imageUrl: "" },
    { name: "Sydney", imageUrl: "" },
    { name: "Istanbul", imageUrl: "" }
  ];

  const pickDestinationAtRandom = () => {
    setIsLoading(true);
    setTimeout(() => {
      const index = Math.floor(Math.random() * popularCities.length);
      setChosenCity(popularCities[index]);
      setIsLoading(false);
    }, 3000)
  }

  return (
    <div> 
      <div>
        <NavBar />
      </div>
      <div>
        <h2 className='destination-message-main-title'>Deciding on your next destination can be challenging</h2>
      </div>
      <p className='destination-message'>Let us help you decide</p>
      {isLoading && <Loading/>}
      {chosenCity && !isLoading && 
      <>
        <h1 className='d-inline'>{chosenCity.name}</h1> <button className='ms-3' onClick={pickDestinationAtRandom}>Pick a Location For me</button> 
        {chosenCity.imageUrl && <img src={chosenCity.imageUrl} alt={chosenCity.name}/>}
      </>
      }
      {!chosenCity && <button onClick={pickDestinationAtRandom}>Pick a Location For me</button>}
    </div> 
  );
}

export default Destination;

