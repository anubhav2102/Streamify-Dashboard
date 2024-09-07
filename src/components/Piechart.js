import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DashboardContext } from '../context/DashboardContext';

const RevenuePieChart = ({sendActiveTable}) => {
  const { Subscriptions, ads } = useContext(DashboardContext);
  const [data, setData] = useState([]);

  const COLORS = ['#0088FE', '#FFBB28'];
  const handlePieData = () => {
    let subsRevenue = 0;
    let adsRevenue = 0;
    for(let i=0;i<Subscriptions.length;i++){
        subsRevenue += (Subscriptions[i].planAmount)*Subscriptions[i].planValidity;
    }
    for(let i=0;i<ads.length;i++){
        adsRevenue += (ads[i].opportunities)*400;
    }
    let tempData = [{ name: 'Subscriptions', value: subsRevenue },{ name: 'Ads', value: adsRevenue }];
    setData(tempData);
  }
  const handlePieClick = (data) => {
    if(data.name === 'Ads'){
      sendActiveTable('ads');
    }else{
      sendActiveTable('subscriptions');
    }
  }
  useEffect(()=>{
    handlePieData();
  },[])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          onClick={handlePieClick}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RevenuePieChart;
