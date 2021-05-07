import React from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Login() {
    return (
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary">Login</Button>{''}
            </Form>
    )
}

export default Login