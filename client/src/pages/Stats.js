import React from 'react';
import { Container } from '../components/Grid';
import Chart from '../components/Chart/Chart.js';
import ChartTwo from '../components/Chart/Chart2';

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
