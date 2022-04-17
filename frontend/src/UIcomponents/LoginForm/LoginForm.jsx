import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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

  return (
    <div id="login" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <h1 className="text-center">Chat Application</h1>
      <Form onSubmit={handleSubmit} className="container h-100 w-100 d-flex flex-column">
        <Form.Group size="lg" controlId="email" className="d-flex h-100 flex-column justify-content-center mb-3">
          <Form.Label className="login__label">Email</Form.Label>
          <Form.Control
            className="p-3"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-3">
          <Form.Label className="login__label">Password</Form.Label>
          <Form.Control
            className="p-3"
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
        <div class="d-inline-flex justify-content-center mt-4 mt-xl-0 mt-lg-0 pb-3" >
          <a id="register__anchor" href="/">
            New Around Here?
            <span class="text__blue">
              Join Chat Application
            </span>
          </a>
        </div>
      </Form>
    </div>
  );
}