import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CurrentUser } from "../contexts/CurrentUser";

function LoginForm({ show, handleClose, props }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setCurrentUser } = useContext(CurrentUser)

    const clearForm = () => {
        setEmail('');
        setPassword('');
    }

    const submitForm = () => {
        const userCredentials = {
            email,
            password
        }
    
        fetch('http://localhost:5050/authentication/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid email or password');
            }
            return response.json();
        })
        .then(data => {
            alert('Welcome, Voyager!');
            clearForm();
            setCurrentUser(data.user);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user)
            localStorage.setItem('userId', data.user._id)
            handleClose();
            
        })
    }
    

    return (
        <form className="container">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Voyager Vault - User Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome back! We are excited to help you track adventures and discover new wonders on your next voyage!</p>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    <small id="emailHelp" class="form-text text-muted">* We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button onClick={submitForm} variant="primary">Log In</Button>
                </Modal.Footer>
            </Modal>
        </form>
    )
}

export default LoginForm;
