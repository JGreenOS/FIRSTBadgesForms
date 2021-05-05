// Page for the form page of the app
import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"

function Form () {
    return (
        <div>
            <Navbar />
            <Container fluid>
                <p>form for assigning</p>
            </Container>
        </div>
    )
}

export default Form;