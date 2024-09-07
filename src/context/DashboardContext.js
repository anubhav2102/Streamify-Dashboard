import React, { createContext, useState } from 'react';
import data from '../utils/data';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { metricsData, streamData, usersSubscriptionData, adsData } = data;

  const [metrics, setMetrics] = useState(metricsData);
  const [streams, setStreams] = useState(streamData);
  const [Subscriptions, setSubscriptions] = useState(usersSubscriptionData);
  const [ads, setAds] = useState(adsData);

  return (
    <DashboardContext.Provider value={{ metrics, setMetrics, streams, setStreams, Subscriptions, setSubscriptions, ads, setAds }}>
      {children}
    </DashboardContext.Provider>
  );
};
