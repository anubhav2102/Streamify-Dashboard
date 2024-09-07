import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold">
        Streamify Dashboard
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Notifications
        </button>
        <div className="relative">
          <button className="flex items-center text-white">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0X_UyJJsL5pKbDIqbsQfPyrBo5nIrbvzFJg&s"
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="ml-2">Hi Anubhav 👋</span>
          </button>
        </div>
      </div>
      <button
        className="text-white focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
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
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
