import React from 'react';

const MetricCard = ({ title, value }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex-1">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-3xl mt-2">{value}</p>
  </div>
);

export default MetricCard;
