import React, { useContext, useState } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const Datatable = () => {
  const { streams } = useContext(DashboardContext);
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'asc' });

  const sortedStreams = [...streams].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevState) => ({
      key,
      direction: prevState.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border" onClick={() => handleSort('songName')}>
              Song Name
            </th>
            <th className="py-2 px-4 border" onClick={() => handleSort('artist')}>
              Artist
            </th>
            <th className="py-2 px-4 border" onClick={() => handleSort('dateStreamed')}>
              Date Streamed
            </th>
            <th className="py-2 px-4 border" onClick={() => handleSort('streamCount')}>
              Stream Count
            </th>
            <th className="py-2 px-4 border">User ID</th>
          </tr>
        </thead>
        <tbody>
          {sortedStreams.map((stream, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 border">{stream.songName}</td>
              <td className="py-2 px-4 border">{stream.artist}</td>
              <td className="py-2 px-4 border">{stream.dateStreamed}</td>
              <td className="py-2 px-4 border">{stream.streamCount}</td>
              <td className="py-2 px-4 border">{stream.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
