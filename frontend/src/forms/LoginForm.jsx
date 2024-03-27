import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginForm({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        .then(resp => {
            console.log(resp);
            alert('Welcome, Voyager!');
            clearForm();
        })
        .catch(error => {
            setError(error.message);
        });
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

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small id="emailHelp" className="form-text text-muted">* We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p>{error}</p>}
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
