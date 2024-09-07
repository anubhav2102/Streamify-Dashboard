import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserGrowthChart = () => {
  
  const data = [
    { month: 'Jan', users: 307, activeUsers: 242 },
    { month: 'Feb', users: 500, activeUsers: 350 },
    { month: 'Mar', users: 700, activeUsers: 470 },
    { month: 'Apr', users: 900, activeUsers: 600 },
    { month: 'May', users: 1220, activeUsers: 730 },
    { month: 'Jun', users: 1250, activeUsers: 700 },
    { month: 'Jul', users: 1400, activeUsers: 760 },
    { month: 'Aug', users: 1450, activeUsers: 820 },
    { month: 'Sep', users: 1500, activeUsers: 870 }
];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
        <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
