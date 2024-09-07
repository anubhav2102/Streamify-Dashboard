import React, { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DashboardContext } from '../context/DashboardContext';

const TopSongsBarChart = () => {
  const { streams } = useContext(DashboardContext);
  const [data, setData] = useState([]);

  const getTopSongsBarData = () => {
    let songsData = streams;
    let songObj = {};
    for (let i = 0; i < songsData.length; i++) {
        const song = songsData[i].songName;
        if (!songObj[song]) {
            songObj[song] = 0;
        }
        songObj[song] += songsData[i].streamCount;
    }
    let songArray = Object.keys(songObj).map(songName => ({
        songName: songName,
        streams: songObj[songName]
    }));
    songArray.sort((a, b) => b.streams - a.streams);
    let topSongs = songArray.slice(0, 5);
    setData(topSongs);
  }

  useEffect(()=>{
    getTopSongsBarData();
  },[])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="songName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="streams" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopSongsBarChart;
