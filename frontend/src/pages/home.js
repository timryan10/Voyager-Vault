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
                <img className="banner-img" src="https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/Lead-AdobeStock_290053056-scaled.jpeg" alt="Ireland Odysseys Unlimited by Irina Schmidt on adobe stock photos" />
                <div className="image-tiles d-flex justify-content-center align-items-center">
                    <div className="circle-image position-relative">
                        <a href="/pages/countries"><img className="rounded-circle" src="https://st2.depositphotos.com/3591429/5996/i/450/depositphotos_59969927-stock-photo-different-countries-united-with-flags.jpg" alt="Country flags from depositphoto.com" /></a>
                        <div className="middle">
                            {/* <Link to="/countries"><div className="text">Countries</div></Link> */}
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <a href="/pages/destinations"><img className="rounded-circle" src="https://t4.ftcdn.net/jpg/03/08/38/83/360_F_308388341_kzxK7d31ZYO7FmBClxJmYuZZb6dn6a3g.jpg" alt="Tourist images from adobe stock photos" /></a>
                        <div className="middle">
                            {/* <Link to="/destinations"><div className="text">Destinations</div></Link> */}
                        </div>
                    </div>
                    <div className="circle-image position-relative">
                        <a href="/pages/wishlist"><img className="rounded-circle" src="https://media.istockphoto.com/id/1058606496/photo/flat-lay-of-toy-airplane-with-pen-and-white-clean-paper-notepad-on-vivid-yellow-background.jpg?s=612x612&w=0&k=20&c=D2do0jwVaWGbr903qKeTegWr1Pvb7mCCE-Hj1ZuMVGU=" alt="Travel wish list from istockphoto.com" /></a>
                        <div className="middle">
                            {/* <Link to="/wishlist"><div className="text">Wishlist</div></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
