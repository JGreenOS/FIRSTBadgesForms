import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"
import StudentTable from '../components/StudentTable/StudentTable.jsx'

function TeamProfile() {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <p>Here would be the list of kids that an issuer can give an assertion to.</p>
                <p> ToDo: return list of students</p>
                <br />
                <StudentTable />
                <p>Here would be the list of kids that an issuer can give an assertion to.</p>
                <p> ToDo: return list of students</p>
            </Container>
        </div>
    );
}

export default TeamProfile;