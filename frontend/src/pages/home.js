import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import { Link } from "react-router-dom";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            src: "https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/Lead-AdobeStock_290053056-scaled.jpeg",
            alt: "Picture of a castle in Ireland from pexels.com",
        },
        {
            src: "https://images.pexels.com/photos/3727255/pexels-photo-3727255.jpeg",
            alt: "Architecture in Santorini, Greece from pexels.com",
        },
        {
            src: "https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Sunset at beach from pexels.com",
        },
        {
            src: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Travelers climbing snowy mountain from pexels.com",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]); // Include slides.length in the dependency array

    return (
        <div>    
            <div>
                <NavBar />
            </div>
            <div>
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === currentSlide ? "active" : ""
                                }`}
                            >
                                <img className="d-block w-100" src={slide.src} alt={slide.alt} />
                            </div>
                        ))}
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div>
                <h3>Unlocking Travel Stories. Inspiring Destinations.</h3>
                <div className="image-tiles d-flex justify-content-center align-items-center">
                    <div className="circle-image position-relative">
                        <a href="/pages/countries"><img className="rounded-circle" src="https://st2.depositphotos.com/3591429/5996/i/450/depositphotos_59969927-stock-photo-different-countries-united-with-flags.jpg" alt="Country flags from depositphoto.com" /></a>
                        <div className="middle">
                            <Link to="/countries">
                                <div className="text">Countries</div>
                            </Link>
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <a href="/pages/destinations"><img className="rounded-circle" src="https://t4.ftcdn.net/jpg/03/08/38/83/360_F_308388341_kzxK7d31ZYO7FmBClxJmYuZZb6dn6a3g.jpg" alt="Tourist images from adobe stock photos" /></a>
                        <div className="middle">
                            <Link to="/destination">
                                <div className="text">Destinations</div>
                            </Link>
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <a href="/pages/wishlist"><img className="rounded-circle" src="https://images.squarespace-cdn.com/content/v1/5f0780262fb7130a5ea990a7/1609721381739-1W27VHBAJHCN4W69TRGT/travel-list-banner.png?format=2500w" alt="Wishlist from postcardsfromaplanner.com" /></a>
                        <div className="middle">
                            <Link to="/wishlist">
                                <div className="text">Wishlist</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
