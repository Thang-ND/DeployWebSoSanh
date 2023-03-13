import './Dashboard.css';
import React, { Component }  from 'react';
import Chart from "./Chart";

const Dashboard = () => {
  
  return <div className="App">
    <h1 className="title">Charts</h1>
    <h2 className="title">Devices Dashboard with Filters</h2>
    
    <div className="charts">
      <Chart height={'600px'} width={'800px'}  chartId={'63abfd80-4545-4a82-888c-848d95c24d55'}/>
      <Chart height={'600px'} width={'800px'}  chartId={'63abfef1-2404-4b50-8714-c77500a27885'}/>
      {/* <Chart height={'600px'} width={'800px'}  chartId={'63abfc56-7dcf-4f3b-8e97-1838498b2c4e'}/> */}
      <Chart height={'600px'} width={'800px'}  chartId={'63fcd53f-d57f-4ba7-8889-6ba17722c202'}/>
      <Chart height={'600px'} width={'800px'}  chartId={'63fce6ad-c36f-4fda-8222-dffb630df931'}/>

      <Chart height={'600px'} width={'800px'}  chartId={'63fcda12-c36f-4884-852e-dffb63015794'}/>
      <Chart height={'600px'} width={'800px'}  chartId={'63fcd46b-a47b-4346-831e-f5e800e93a7b'}/>
    
    </div>
  </div>
};

export default Dashboard;
 