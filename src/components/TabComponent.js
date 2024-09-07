import React, { useState, useContext, useEffect } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Filters from './Filter';

const TabComponent = ({activeTable}) => {
  const { Subscriptions, ads, streams } = useContext(DashboardContext);
  const [activeTab, setActiveTab] = useState('streams');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [tempData, setTempData] = useState([...streams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if(tab === 'streams'){
        setTempData(streams);
    }
    else if(tab === 'subscriptions'){
        setTempData(Subscriptions);
    }
    else if(tab === 'ads'){
        setTempData(ads);
    }
    else {
        setTempData([]);
    }
  };

  const handleSort = (column) => {
    const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
    sortData(column, direction);
  };

  const sortData = (column, direction) => {
    const sortedData = tempData.sort((a, b) => {
      if (direction === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
      setTempData(sortedData);
  };

  const handleTempStreams = (d) => {
    setTempData(d);
  }

  useEffect(()=> {
    if(activeTable){
        if(activeTable === 'subscriptions'){
            handleTabChange('subscriptions');
        }
        if(activeTable === 'ads'){
            handleTabChange('ads');
        }
    }
  }, [activeTable])

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'streams' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('streams')}
        >
          Streams
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'subscriptions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('subscriptions')}
        >
          Subscriptions
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'ads' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('ads')}
        >
          Ads
        </button>
      </div>
      {
        activeTab === 'streams' && (
            <div>
                <Filters tempStreams={handleTempStreams}/>
            </div>
        )
      }

      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr>
            {activeTab === 'streams' && (
              <>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('songName')}>
                  Song Name
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('artist')}>
                  Artist
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('dateStreamed')}>
                  Date Streamed
                </th>
                <th className="py-2 px-4 border-b cursor-pointer" onClick={() => handleSort('streamCount')}>
                  Stream Count
                </th>
                <th className="py-2 px-4 border-b">User ID</th>
              </>
            )}
            {activeTab === 'subscriptions' && (
              <>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Plan Amount</th>
                <th className="py-2 px-4 border-b">Expiry Date</th>
                <th className="py-2 px-4 border-b">Plan Validity (months)</th>
                <th className="py-2 px-4 border-b">User ID</th>
              </>
            )}
            {activeTab === 'ads' && (
              <>
                <th className="py-2 px-4 border-b">Source</th>
                <th className="py-2 px-4 border-b">Opportunities</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {tempData.map((item, index) => (
            <tr key={index}>
              {activeTab === 'streams' && (
                <>
                  <td className="py-2 px-4 border-b">{item.songName}</td>
                  <td className="py-2 px-4 border-b">{item.artist}</td>
                  <td className="py-2 px-4 border-b">{item.dateStreamed}</td>
                  <td className="py-2 px-4 border-b">{item.streamCount}</td>
                  <td className="py-2 px-4 border-b">{item.userId}</td>
                </>
              )}
              {activeTab === 'subscriptions' && (
                <>
                  <td className="py-2 px-4 border-b">{item.username}</td>
                  <td className="py-2 px-4 border-b">{item.planAmount}</td>
                  <td className="py-2 px-4 border-b">{item.expiryOn}</td>
                  <td className="py-2 px-4 border-b">{item.planValidity}</td>
                  <td className="py-2 px-4 border-b">{item.userId}</td>
                </>
              )}
              {activeTab === 'ads' && (
                <>
                  <td className="py-2 px-4 border-b">{item.source}</td>
                  <td className="py-2 px-4 border-b">{item.opportunities}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TabComponent;
