import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { Container, Row, Col } from "../components/Grid";
import Login from '../components/Login/Login.jsx';


function SignIn() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <Row> <h2 style={{margin:"auto", padding: "20px",}}>Welcome to the FIRST Badges Student Award Portal</h2> </Row>
                <Row></Row>
                <Row>
                    <Col size="md-4">
                        <Login />
                    </Col>
                    <Col size="md-8">
                        
                    <p>This area is for registered FIRST Robotics Competition coaches to track, manage and award digital badges to participants on their FRC team.
                    </p>
                    <p> If you need to register for a login or to have a coach/mentor password reset, please use the get help via email link below with your team information.</p>
                    
                    </Col>
                </Row>
            
            </Container>
        </div>
    );
}

export default SignIn;