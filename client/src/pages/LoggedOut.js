import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Grid';

function LoggedOut() {
  return (
    <>
      <Container>
        <h1>You are logged Out</h1>
        <h5>
          Return to <Link to='/'> Login </Link>
        </h5>
      </Container>
    </>
  );
}

export default LoggedOut;
