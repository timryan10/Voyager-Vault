import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";


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
            </nav>
          </header> 



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
          </div>
    )        
};

export default NavBar;