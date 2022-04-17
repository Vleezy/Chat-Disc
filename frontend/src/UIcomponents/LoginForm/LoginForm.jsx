import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import "./LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (<>
    <Helmet>
      <style>{'body { background-color: #2f3135; }'}</style>
    </Helmet>

    <div id="login" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <h1 className="text-center text-light"><SmartToyIcon fontSize="x-large"/></h1>
      <Form onSubmit={handleSubmit} className="container h-100 w-100 d-flex flex-column">
        <Form.Group size="lg" controlId="email" className="d-flex h-100 flex-column justify-content-center mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            className="p-3 text-light bg__input"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            className="p-3 text-light bg__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center mx-4">
          <Button block className="btn btn-primary w-100 mt-2 mb-3" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </div>
        <div class="d-inline-flex justify-content-around mt-4 mt-xl-0 mt-lg-0 pb-3" >
          <div>
            <a id="Forgot__anchor" href="/">
              Forgot Password?
            </a>
          </div>

          <div>
            <a id="register__anchor" href="/">
              <span class="text__blue">
                Join Today!
              </span>
            </a>
          </div>

        </div>
      </Form>
    </div>

  </>
  );
}