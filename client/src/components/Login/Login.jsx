import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

function Login(props) {
  return (
    <Form className='login-form' onSubmit={props.handleSubmit}>
      <Form.Group controlId='formGroupEmail'>
        <Form.Label>Registered Coach/Mentor Email</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type='email'
          name='email'
          placeholder='Enter email'
        />
      </Form.Group>
      <Form.Group controlId='formGroupPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={props.handleChange}
          type='password'
          name='password'
          placeholder='Password'
        />
      </Form.Group>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type='submit' style={{ margin: '2px' }}>
          Login to Badge Award Portal
        </Button>
      </div>
    </Form>
  );
}

export default Login;
