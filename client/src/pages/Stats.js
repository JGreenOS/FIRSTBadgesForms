import React from 'react';
import { Container } from '../components/Grid';
import Chart from '../components/Chart/Chart.js';

function Stats() {
  return (
    <>
      <div>
        <Container fluid>
          <Chart />
        </Container>
      </div>
    </>
  );
}

export default Stats;
