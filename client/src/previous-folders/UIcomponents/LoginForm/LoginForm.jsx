import React, { useState } from "react";
// import { Helmet } from 'react-helmet';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LoginForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Backdrop from "../Decoration/Backdrop";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast("Oops something went wrong check your email!");
    }
    if (password === "") {
      toast("Oops something went wrong check your password!");
    }
    if (!email || !password ) return;

    toast.success("Successful Login!");
  };

  // const notify = () => toast("Coming Soon!");


  return (<>
    {/* <Helmet>
      <style>{'body { background-color: #2f3135;  }'}</style>
    </Helmet> */}

    {/* <Backdrop/> */}

    <div>
    <ToastContainer
    theme='dark'
    position='bottom-right'
    autoClose={5000}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
    // limit={1}
    />

    <div id="login" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login__wrapper">
      <h1 className="text-center text-light">
        <SmartToyIcon fontSize="x-large" />
      </h1>
      <Form onSubmit={handleSubmit} className="container h-100 w-100 d-flex flex-column">
        <Form.Group size="lg" controlId="email" className="d-flex h-100 flex-column justify-content-center mb-3">
          <Form.Label className="text-light">Email</Form.Label>
          <Form.Control
            className="p-3 text-light bg__input_login"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="mb-3">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            className="p-3 text-light bg__input_login"
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
            <span id="forgot__anchor" onClick={toast.success}>
              Forgot Password?
            </span>
          </div>

          <div>
            <a id="register__anchor" href="/register">
              <span class="text__green">
                Join Today!
              </span>
            </a>
          </div>

        </div>
      </Form>
    </div>
</div>
</div>
  </>
  );
}