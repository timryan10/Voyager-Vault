// This form allows a registered user to sign in to their account
import React, {useState, useContext} from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CurrentUser } from "../contexts/CurrentUser";

function LoginForm({show, handleClose}){
    
    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(null)

    const clearForm = () => {
        setEmail('')
    }

    async function submitForm(e)  {

        e.preventDefault()

        const newUser = {
            email,
            password
        }

        try {
            const response = await fetch(`http://localhost:5050/authentication/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email, password)
            })

            const data= await response.json()

            if(response.ok) {
                setCurrentUser(data.user)
                localStorage.setItem('token', data.token);
                navigate.push('/')
            }else{
                setErrorMessage(data.message)
            }
        } catch (error) {
            console.error("An error occured:", error)
            setErrorMessage("An error occured, please try again")
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
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={e => setEmail({ email: e.target.value})}/>
                    <small id="emailHelp" class="form-text text-muted">* We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={e => setPassword({ password: e.target.value})}/>
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