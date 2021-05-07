import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Container, Row, Col } from "../components/Grid";
import Login from '../components/Login/Login.jsx';

function SignIn() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-4">
                        <Login />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignIn;