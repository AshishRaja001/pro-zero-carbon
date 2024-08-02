import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from './dummyData.json';

const Chart = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <h2>Medals Line Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="linear" dataKey="Medals" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
