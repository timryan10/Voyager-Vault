import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
import Image from 'react-bootstrap/Image';
import React from 'react';
import logo from '../assets/Voyager-Vault-logo2.png';
import 'bootstrap';


function NavBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
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
                  <ul className="navbar-brand me-auto mb-2 mb-lg-1">
                    <li className="nav-item active"><Link to="/countries">Search Countries</Link></li>
                    <li className="nav-item active"><Link to="/wishlist">My Wishlist</Link></li>
                    <li className="nav-item active"><Link to="/destination">Destinations</Link></li>
                  </ul>
                  <div>
                    <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
                    <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
                  </div>
                </div>
              </div>
            </nav>
          </header> 
          <RegForm show={show} handleClose={handleClose}/>
          <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
        </div>
    )        
};

export default NavBar;