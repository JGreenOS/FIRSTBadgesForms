//Currently, the image is a placeholder for chart js. Just using this for for the demo on saturday

import React from 'react';
import BarChart from "../Images/BarChart.jpeg";

function Chart() {
    return (
        <div>
            <img className="chart" src={ BarChart } 
            alt={"Chart"}/>
        </div>
    );
}

export default Chart;