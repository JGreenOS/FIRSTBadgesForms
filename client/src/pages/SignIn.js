import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Container, Row, Col } from '../components/Grid';
import Login from '../components/Login/Login.jsx';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/login', {
        username: state.email,
        password: state.password,
      })
      .then((res) => {
        if (res.data === true) {
          console.log(props);
          props.setUser(true);
          setRedirect(true);
        }
      })
      .catch((err) => console.log(err));
  };

  if (redirect) {
    return <Redirect to='/team' />;
  }

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          {' '}
          <h2 style={{ margin: 'auto', padding: '20px' }}>
            Welcome to the FIRST Badges Student Award Portal
          </h2>{' '}
        </Row>
        <Row></Row>
        <Row>
          <Col size='md-4'>
            <Login handleChange={handleChange} handleSubmit={handleSubmit} />
          </Col>
          <Col size='md-8'>
            <p>
              This area is for registered FIRST Robotics Competition coaches to
              track, manage and award digital badges to participants on their
              FRC team.
            </p>
            <p>
              {' '}
              If you need to register for a login or to have a coach/mentor
              password reset, please use the get help via email link below with
              your team information.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
