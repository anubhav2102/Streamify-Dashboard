import React, { useState } from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <DashboardProvider>
      <div className="App flex flex-col h-screen">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-auto p-1 ml-0 md:ml-64">
            <Dashboard />
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;
