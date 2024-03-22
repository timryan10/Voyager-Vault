// This form allows a user to register for a new account
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RegForm({show, handleClose}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState(''); 

    const clearForm = () => {
        setFirstName('');
        setLastName('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
        setAddress2('')
        setCity('')
        setState('')
        setZip('')
    }


    const submitForm = () => {
        const newUser = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            address2,
            city,
            state,
            zip,
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
                    <Modal.Title>Voyager Vault</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <h2>Register for your personal account with Voyager Vault</h2>
                    <p>We are excited to help you track adventures and discover new wonders on your next voyage!</p>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label className="form-label">First Name:</label>
                            <input className="form-control" type="text" id="firstName" name="first-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            required/>
                        </div>

                        <div className="form-group col-sm-4">
                            <label className="form-label">Last Name:</label>
                            <input className="form-control" type="text" id="lastName" name="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label className="form-label">E-mail Address:</label>
                            <input className="form-control" type="text" id="email" name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                            required/>
                        </div>
                    </div>

                    <div>
                        <div className="form-group col-sm-6">
                            <label className="form-label">Phone Number:</label>
                            <input className="form-control" type="text" id="phoneNumber" name="phone-number" value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" id="inputAddress" value={address}
                            onChange={(e) => setAddress(e.target.value)} placeholder="1234 Main St"/>
                    </div>

                    <div className="form-group">
                        <label >Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" value={address2}
                            onChange={(e) => setAddress2(e.target.value)} placeholder="Apartment, studio, or floor"/>
                    </div>
                        
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" value={city}
                                onChange={(e) => setCity(e.target.value)} id="inputCity"/>
                        </div>

                        <div className="form-group col-md-4">
                            <label>State</label>
                            <select id="inputState" value={state}
                                onChange={(e) => setState(e.target.value)} className="form-control">
                                <option>Select your state</option>
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AK</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </select>
                        </div>

                        <div className="form-group col-md-2">
                            <label>Zip</label>
                            <input type="text" className="form-control" id="inputZip" value={zip}
                                onChange={(e) => setZip(e.target.value)}/>
                        </div>
                    </div>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button onClick={submitForm} variant="primary">Register Now</Button>
                </Modal.Footer>
            </Modal>
        </form>
    )
}

export default RegForm