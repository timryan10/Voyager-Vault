import React from 'react';
import NavBar from '../components/NavBar'


const Home = () => {
const React = require('react')

return (
    <div>    
            <div>
                <h1>Voyager Vault</h1>
                <NavBar />
            </div>

            <div>
                <img className="banner-img" src="https://media.istockphoto.com/id/1366403216/photo/german-shepherd.webp?b=1&s=170667a&w=0&k=20&c=Fmstk2OPzftZtkRiU9rA61mRaWzpK_1Y7Q-FOVqvVU4=" />
                <div className="image-tiles d-flex justify-content-center align-items-center">
                    <div className="circle-image position-relative">
                        <a href="/pages/countries"><img className="rounded-circle" src="https://media.istockphoto.com/id/493218065/photo/european-continent-marked-with-flags.jpg?s=612x612&w=0&k=20&c=Tis1r0KBQUs18vg7f4FEHqlG9Zgik6ClW1F_AFGfUDw=" alt="European continent with flags from istockphoto" /></a>
                        <div className="middle">
                            <Link to="/countries"><div className="text">Countries</div></Link>
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <a href="/pages/destinations"><img className="rounded-circle" src="https://media.istockphoto.com/id/1424070375/photo/savannah-cat-sits-on-a-pedestal-pillow-against-a-background-of-greenery.jpg?s=612x612&w=0&k=20&c=48u686oEWUSpkbfVeqQOEcimNl1u0LMEsUSrA9y_ncY=" /></a>
                        <div className="middle">
                            <Link to="/destinations"><div className="text">Destinations</div></Link>
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <img className="rounded-circle" src="https://www.worldanimalprotection.us/sites/default/files/styles/600x400/public/media/GettyImages-171152147_0.jpg?h=2a7d4302&itok=Qlo1dXxe" />
                        <div className="middle">
                            <Link to="/wishlist"><div className="text">Wishlist</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Home
