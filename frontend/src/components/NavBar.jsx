import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";
import SearchBar from "./SearchBar";


function NavBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
    return (
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/countries">Countries</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/destination">Destination</Link></li>
                <li><Button variant="secondary" onClick={handleShow}>Register</Button></li>
                <li><Button variant="primary" onClick={handleShowLogin}>Log In</Button></li>
              </ul>
              <li><SearchBar/></li>
            </nav>
          </header> 

          <RegForm show={show} handleClose={handleClose}/>

          <LoginForm show={showLogin} handleClose={handleCloseLogin}/>

          </div>
    )        
};

export default NavBar;