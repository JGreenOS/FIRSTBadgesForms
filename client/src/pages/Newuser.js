import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Container, Row, Col } from '../components/Grid';
import Register from '../components/Register/Register.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewUser = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios
      .post('http://localhost:8080/api/signup', {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        // res.json('/');
        setRedirect(true);
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
          <h2 style={{ margin: 'auto', padding: '20px' }}>
            Welcome to FIRST Robotics Competition. Coaches, please signup to
            track, manage and award digital badges to participants on their FRC
            team.
          </h2>
        </Row>
        <Row></Row>
        <Row>
          <Col size='md-4'>
            <Register handleChange={handleChange} handleSubmit={handleSubmit} />
          </Col>
          <Col size='md-8'>
            <h5>
              {' '}
              Do you have an account? <Link to='/'>Login Here!</Link>
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewUser;
