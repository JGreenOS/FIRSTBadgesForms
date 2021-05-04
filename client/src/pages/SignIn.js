import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"

function SignIn() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <p>This is our landing page. Users will sign in first</p>
            </Container>
        </div>
    );
}

export default SignIn;