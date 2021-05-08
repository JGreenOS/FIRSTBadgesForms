import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"
import StudentTable from '../components/StudentTable/StudentTable.jsx'

function TeamProfile() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <br />
                <StudentTable />
            </Container>
        </div>
    );
}

export default TeamProfile;