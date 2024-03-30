import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
import { CurrentUser } from "../contexts/CurrentUser";
import React from 'react';
import logo from '../assets/Voyager-Vault-logo2.png';
import 'bootstrap';

function NavBar() {
    const { currentUser, setCurrentUser } = useContext(CurrentUser);

    const handleLogout = async () => {
        try {
            // Clear token from localStorage
            localStorage.removeItem('token');

            // Update currentUser state to reflect logout
            setCurrentUser(null);

            // Redirect to login page or update UI accordingly
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

    // Updated conditional rendering based on the presence of currentUser and a key property like id, email, or firstName
    const isLoggedIn = currentUser && currentUser.email;

    return (
        <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={`${logo}`} height="90" alt="Voyager Vault company logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01"> 
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-1">
                    <li className="nav-item text-end d-flex align-items-center">
                      <Link to="/countries">Search Countries</Link>
                    </li>
                    <li className="nav-item text-end d-flex align-items-center">
                      <Link to="/wishlist">My Wishlist</Link>
                    </li>
                    <li className="nav-item text-end d-flex align-items-center">
                      <Link to="/destination">Been To</Link>
                    </li>
                    <li className="nav-item d-flex align-items-center justify-content-end mt-3 mt-lg-0">
                        {isLoggedIn ? (
                            <>
                                <div>Welcome, {currentUser.firstName}</div>
                                <Button className="formButton" variant="danger" onClick={handleLogout}>Log Out</Button>
                            </>
                        ) : (
                            <>
                                <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
                                <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
                            </>
                        )}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header> 
          <RegForm show={show} handleClose={handleClose}/>
          <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
        </div>
    );
}

export default NavBar;