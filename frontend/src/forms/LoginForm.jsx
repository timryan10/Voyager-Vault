// This form allows a registered user to sign in to their account
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginForm({show, handleClose}){
    const [email, setEmail] = useState('');

    const clearForm = () => {
        setEmail('')
    }

    const submitForm = () => {
        const newUser = {
            email,
        }


        // This link needs to be updated to pull information
        fetch('https://temptails.onrender.com/api/adoption/',{
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser),
        }).then(response => response.json())
        .then(resp => {
            console.log(resp)
            alert('Welcome, Voyager!');
            clearForm();
        }).catch(e => {
            alert(e.message);
        })
    }

    return(
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

                {/* <h2>Log in to your personal account with Voyager Vault</h2> */}
                <p>Welcome back! We are excited to help you track adventures and discover new wonders on your next voyage!</p>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">* We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
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

export default LoginForm