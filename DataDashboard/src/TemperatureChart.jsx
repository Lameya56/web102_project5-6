import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const TemperatureChart = ({ data }) => {
  return (
    
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '800px' }}> {/* Adjust width as needed */}
      <h2>Temperature Chart</h2>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="startTime" stroke="ffffff" />
        <YAxis stroke='ffffff'/>
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </div>
    </div>
  );
};

export default TemperatureChart;