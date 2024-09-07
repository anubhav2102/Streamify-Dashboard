import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-gray-800 text-white w-64 h-screen p-6 fixed top-0 z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0X_UyJJsL5pKbDIqbsQfPyrBo5nIrbvzFJg&s" alt="User Profile" className="w-10 h-10 rounded-full border-2 border-white"/>
        <div className="text-lg font-bold">Hi Anubhav 👋</div>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Overview
        </a>
        <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Users
        </a>
        <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Revenue
        </a>
        <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Streams
        </a>
        <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Top Artists
        </a>
      <a href="/" className="hover:bg-gray-700 p-2 rounded" onClick={toggleSidebar}>
          Settings
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
