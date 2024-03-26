import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CurrentUser } from "../contexts/CurrentUser";

function LoginForm({ show, handleClose }) {
    const navigate = useNavigate();

    const { setCurrentUser = () => {} } = useContext(CurrentUser); // Provide a default value for setCurrentUser

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const clearForm = () => {
        setEmail('');
        setPassword('');
    }

    async function submitForm(e) {
        e.preventDefault();
    
        const newUser = {
            email,
            password
        };
    
        try {
            const response = await fetch(`http://localhost:5050/authentication/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setCurrentUser(data.user);
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setErrorMessage("An error occurred, please try again");
        }
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
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">* We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button onClick={submitForm} variant="primary">Log In</Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
}

export default LoginForm;
