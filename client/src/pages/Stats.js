import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"
import Chart from '../components/Chart/Chart.js'

function Stats() {
    return (
    <div>
        <Navbar />
        <Container fluid>
            <Chart />
        </Container>
    </div>
        
    );
}

export default Stats;