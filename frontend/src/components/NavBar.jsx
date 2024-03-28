import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
import { useContext } from 'react'

import { CurrentUser } from "../contexts/CurrentUser";

function NavBar() {
    const { currentUser } = useContext(CurrentUser);

    const handleLogout = async () => {
      try {
          // Clear token from localStorage
          localStorage.clear();
          // Redirect to home page
          window.location.href = '/';
      } catch (error) {
          console.error('Error logging out:', error);
      }
  };
  

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    if (currentUser) {
        return (
            <div>
                <header>
                    <nav className="navigation">
                        <h1>Voyager Vault</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/countries">Search Countries</Link></li>
                            <li><Link to="/wishlist">My Wishlist</Link></li>
                            <li><Link to="/destination">Destinations</Link></li>
                        </ul>
                        <div>
                            <p>Welcome, {currentUser.firstName}</p>
                            <Button className="formButton" variant="danger" onClick={handleLogout}>Log Out</Button>
                        </div>
                    </nav>
                </header>
            </div>
        );
    } else {
        return (
            <div>
                <header>
                    <nav className="navigation">
                        <h1>Voyager Vault</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/countries">Search Countries</Link></li>
                            <li><Link to="/wishlist">My Wishlist</Link></li>
                            <li><Link to="/destination">Destinations</Link></li>
                        </ul>
                        <div>
                            <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
                            <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
                        </div>
                    </nav>
                </header>
                <RegForm show={show} handleClose={handleClose}/>
                <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
            </div>
        );
    }
}

export default NavBar;
