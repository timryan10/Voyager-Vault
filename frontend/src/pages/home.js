import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
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
  }, []);

  return (
    <div>
      <NavBar />
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
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div>
        <p className="our-mission">
          Unlocking Travel Stories, Inspiring Destinations
        </p>
      </div>
      <div className="image-tiles d-flex justify-content-center align-items-center">
        <div className="circle-image position-relative">
          <a href="/pages/countries">
            <img
              className="rounded-circle"
              src="https://st2.depositphotos.com/3591429/5996/i/450/depositphotos_59969927-stock-photo-different-countries-united-with-flags.jpg"
              alt="Country flags from depositphoto.com"
            />
          </a>
          <div className="middle">
            <Link to="/destination">
              <div className="text">Destinations</div>
            </Link>
          </div>
        </div>
        <div className="circle-image position-relative">
          <a href="/pages/destinations">
            <img
              className="rounded-circle"
              src="https://t4.ftcdn.net/jpg/03/08/38/83/360_F_308388341_kzxK7d31ZYO7FmBClxJmYuZZb6dn6a3g.jpg"
              alt="Tourist images from adobe stock photos"
            />
          </a>
          <div className="middle">
            {/* <Link to="/destinations"><div className="text">Destinations</div></Link> */}
          </div>
        </div>
        <div className="circle-image position-relative">
          <a href="/pages/wishlist">
            <img
              className="rounded-circle"
              src="https://media.istockphoto.com/id/1058606496/photo/flat-lay-of-toy-airplane-with-pen-and-white-clean-paper-notepad-on-vivid-yellow-background.jpg?s=612x612&w=0&k=20&c=D2do0jwVaWGbr903qKeTegWr1Pvb7mCCE-Hj1ZuMVGU="
              alt="Travel wish list from istockphoto.com"
            />
          </a>
          <div className="middle">
            {/* <Link to="/wishlist"><div className="text">Wishlist</div></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
