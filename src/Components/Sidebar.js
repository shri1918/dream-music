import { Home, TrendingUp, Explore, Settings, Logout, Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconStyles = {
    color: '#f94646',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '28px',
  };

   return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden fixed top-6 left-6 z-[60] text-white bg-[#f94646] hover:bg-[#d83b3b] p-2.5 rounded-full shadow-lg transition-colors duration-200"
        aria-label="Toggle Menu"
      >
        <Menu />
      </button>
      <div 
        className={`bg-[#0e0e0e] text-white fixed md:relative w-[280px] h-screen flex flex-col justify-between p-6 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'} z-[50] md:shadow-lg`}
        aria-hidden={!isOpen}
      >
      <div>
        <h1 className="text-3xl font-bold mb-8"><AudiotrackIcon sx={{color:'#f94646', fontSize: '42px'}}/> <span className="text-[#f94646]">Dream</span>Music</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <Home sx={iconStyles} />
            <span className="text-lg">Home</span>
          </li>
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <TrendingUp sx={iconStyles} />
            <span className="text-lg">Trends</span>
          </li>
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <AudiotrackIcon sx={iconStyles} />
            <span className="text-lg">Library</span>
          </li>
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <Explore sx={iconStyles} />
            <span className="text-lg">Discover</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <Settings sx={iconStyles} />
            <span className="text-lg">Settings</span>
          </li>
          <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer">
            <Logout sx={iconStyles} />
            <span className="text-lg">Log Out</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
