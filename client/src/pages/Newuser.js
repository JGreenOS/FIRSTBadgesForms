import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
      .post('/api/signup', {
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
    <>
      <div>
        <Container fluid>
          <Row>
            <h2
              style={{ textAlign: 'center', margin: 'auto', padding: '20px' }}
            >
              Welcome to FIRST Robotics Competition.
            </h2>
          </Row>
          <Row>
            <Col size='sm-12'>
              <p style={{ textAlign: 'center' }}>
                Coaches, please signup to track, manage and award digital badges
                to participants on their FRC team.
              </p>
            </Col>
          </Row>
          <Row>
            <Col size='sm-12'>
              <Register
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Col>
            <Col size='sm-12'>
              <h5 style={{ textAlign: 'center' }}>
                {' '}
                Do you have an account? <Link to='/'>Login Here!</Link>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewUser;
