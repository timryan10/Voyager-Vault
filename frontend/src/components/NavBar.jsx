import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
// import SearchBar from "./SearchBar";


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
            <nav className="navigation">
              <h1>Voyager Vault</h1>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/countries">Search Countries</Link></li>
                <li><Link to="/wishlist">My Wishlist</Link></li>
                <li><Link to="/destination">Destinations</Link></li>
              </ul>
              <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
              <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
            </nav>
          </header> 
          <RegForm show={show} handleClose={handleClose}/>
          <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
        </div>
    )        
};

export default NavBar;