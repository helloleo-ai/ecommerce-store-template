import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md);
  background: var(--gradient);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const PriceHistory = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#2A2A2A" 
            strokeWidth={2}
            dot={{ fill: '#2A2A2A' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default PriceHistory;
