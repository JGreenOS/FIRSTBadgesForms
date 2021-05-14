import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"
// import StudentTable from '../components/StudentTable/StudentTable.jsx'
import TeamDropDown from '../components/StudentTableItem/TeamDropDown.jsx'

const TeamProfile = (props) => {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <br />
                <TeamDropDown />
                <br />
            </Container>
        </div>
    );
}

export default TeamProfile;