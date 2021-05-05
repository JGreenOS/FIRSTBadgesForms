import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"

function TeamProfile() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <p>Here would be the list of kids that an issuer can give an assertion to.</p>
            </Container>
        </div>
    );
}

export default TeamProfile;