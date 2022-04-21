import React, { useState } from "react";
// import { Helmet } from 'react-helmet';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import "./RegisterForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Backdrop from "../Decoration/Backdrop";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = useState(false);

    const aboutClose = () => setShow(false);
    const aboutShow = () => setShow(true);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (<>
        {/* <Helmet>
            <style>{'body { background-color: #2f3135; }, '}</style>
        </Helmet> */}

        {/* <Backdrop /> */}

        <div id="register__regForm" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 register__wrapper">
            <h1 className="text-center text-light">
                <SmartToyIcon fontSize="x-large" />
            </h1>
            <Form onSubmit={handleSubmit} className="container h-100 w-100 d-flex flex-column">
                <Form.Group size="lg" controlId="reg-username" className="d-flex h-100 flex-column justify-content-center mb-3">
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control
                        className="p-3 text-light bg__input_register"
                        autoFocus
                        type="reg-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="reg-email" className="d-flex h-100 flex-column justify-content-center mb-3">
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control
                        className="p-3 text-light form__focus bg__input_register "
                        autoFocus
                        type="reg-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="reg-password" className="mb-3">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                        className="p-3 text-light bg__input_register"
                        type="reg-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className="d-flex justify-content-center mx-4">
                    <Button block className="btn__regForm btn-success w-100 mt-2 mb-3" size="lg" type="submit" disabled={!validateForm()}>
                        Register
                    </Button>
                </div>
                <div class="d-inline-flex justify-content-around mt-4 mt-xl-0 mt-lg-0 pb-3" >
                    <div>
                        <span id="about__anchor"
                            href=""
                            onClick={aboutShow}>
                            About
                        </span>
                    </div>

                    <div>
                        <a id="register__anchor_regForm" href="/login">
                            <span class="text__blue">
                                Login
                            </span>
                        </a>
                    </div>

                </div>
            </Form>
            </div>
        </div>

            <Modal id="modal__regForm" show={show} onHide={aboutClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>About Us!</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is a Bot Application created by Alonso and Vlad!</Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={aboutClose}>
            Close
          </Button> */}
                    {/* <Button variant="primary" onClick={aboutClose}>
            Save Changes
          </Button> */}
                </Modal.Footer>
            </Modal>
    </>
    );
}