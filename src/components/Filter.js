import React, { useContext, useEffect, useState } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const Filters = ({tempStreams}) => {
  const { streams } = useContext(DashboardContext);
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [originalStreams] = useState([...streams]);
  const [tempStream, setTempStream] = useState([...streams])

  const handleFilter = () => {
    let filteredStreams = originalStreams;

    if (songName) {
      filteredStreams = filteredStreams.filter((stream) =>
        stream.songName.toLowerCase().includes(songName.toLowerCase())
      );
    }

    if (artist) {
      filteredStreams = filteredStreams.filter((stream) =>
        stream.artist.toLowerCase().includes(artist.toLowerCase())
      );
    }

    if (dateRange.start && dateRange.end) {
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);

      filteredStreams = filteredStreams.filter((stream) => {
        const streamDate = new Date(stream.dateStreamed);
        return streamDate >= startDate && streamDate <= endDate;
      });
    }

    setTempStream(filteredStreams);
    tempStreams(filteredStreams);
  };

  const resetFilters = () => {
    setSongName('');
    setArtist('');
    setDateRange({ start: '', end: '' });
    setTempStream(originalStreams);
  };

  useEffect(()=> {
    setSongName('');
    setArtist('');
    setDateRange({ start: '', end: '' });
    setTempStream(originalStreams);
  }, [])

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-6">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="flex flex-col">
            <label className="font-semibold mb-1">Song Name</label>
            <input
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                className="border border-gray-300 rounded p-2"
                placeholder="Search by song name"
            />
            </div>

            <div className="flex flex-col">
            <label className="font-semibold mb-1">Artist</label>
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="border border-gray-300 rounded p-2"
                placeholder="Search by artist"
            />
            </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Date Range</label>
          <div className="flex flex-col md:flex-row">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="border border-gray-300 rounded p-2 mb-2 md:mb-0 md:mr-2"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        <div className="flex space-x-2 mt-4 md:mt-0">
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Apply Filters
          </button>
          <button
            onClick={resetFilters}
            className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
