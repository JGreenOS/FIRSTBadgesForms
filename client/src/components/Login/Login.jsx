import React from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';


function Login() {
    return (
            <Form className="login-form">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Registered Coach/Mentor Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{margin:"2px",}}>Login to Badge Award Portal</Button>{''}
            </Form>
    )
}

export default Login