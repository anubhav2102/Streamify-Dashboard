import React, { useEffect, useState, useContext } from 'react';
import MetricCard from '../components/MetricCard';
import UserGrowthChart from '../components/Linechart';
import RevenuePieChart from '../components/Piechart';
import TopSongsBarChart from '../components/Barchart';
import TabComponent from '../components/TabComponent.js';
import { DashboardContext } from '../context/DashboardContext';

const Dashboard = () => {
    const [revenue, setRevenue] = useState('');
    const [TopArtist, setTopArtist] = useState('');
    const { ads, Subscriptions, streams } = useContext(DashboardContext);
    const calculateTotalRevenue = () => {
        let SubscriptionsData = Subscriptions;
        let adsData = ads;
        let rev = 0;
        for(let i=0;i<SubscriptionsData.length;i++){
            rev+=((SubscriptionsData[i].planAmount)*(SubscriptionsData[i].planValidity));
        }
        for(let i=0;i<adsData.length;i++){
            rev+=(adsData[i].opportunities)*400;
        }
        return rev;
    }
    const calculateTopArtist = () => {
        let artistsData = streams;
        let artistObj = {};
        for (let i = 0; i < artistsData.length; i++) {
            const artist = artistsData[i].artist;
            if (!artistObj[artist]) {
                artistObj[artist] = 0;
            }
            artistObj[artist] += artistsData[i].streamCount;
        }
        let countedMax = 0;
        let topArtist = null;
        for (let artist in artistObj) {
            if (artistObj[artist] > countedMax) {
                countedMax = artistObj[artist];
                topArtist = artist;
            }
        }
    
        return topArtist;
    };
    
    useEffect(()=> {
        const revenueTotal = calculateTotalRevenue();
        const topArtist = calculateTopArtist();
        setRevenue('₹'+(revenueTotal));
        setTopArtist(topArtist);
    }, [])
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <MetricCard title="Total Users" value="1,500" />
        <MetricCard title="Active Users" value="870" />
        <MetricCard title="Total Streams" value="351" />
        <MetricCard title="Revenue" value={revenue} />
        <MetricCard title="Top Artist" value={TopArtist} />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <UserGrowthChart />
        <RevenuePieChart />
        <TopSongsBarChart />
      </div>
      <div className="mt-8">
        <TabComponent />
      </div>
    </div>
  );
};

export default Dashboard;
