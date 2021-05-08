import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"

function TeamProfile() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <p>Here would be the list of kids that an issuer can give an assertion to.</p>
                <p> ToDo: return list of students</p>
            </Container>
        </div>
    );
}

export default TeamProfile;