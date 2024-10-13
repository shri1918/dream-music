import { Home, TrendingUp, Explore, Settings, Logout } from '@mui/icons-material';
import React from 'react';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
const Sidebar = () => {
  const iconStyles = {
    color: '#f94646',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '28px',
  };

  return (
    <div className="bg-[#0e0e0e] text-white w-[450px] h-screen flex flex-col justify-between p-4">
      <div>
        <h1 className="text-3xl font-bold mb-8"><AudiotrackIcon sx={{color:'#f94646', fontSize: '42px'}}/> <span className="text-[#f94646]">Dream</span>Music</h1>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <Home sx={iconStyles} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4">
            <TrendingUp  sx={iconStyles} />
            <span>Trends</span>
          </li>
          <li className="flex items-center space-x-4">
            <AudiotrackIcon sx={iconStyles} />
            <span>Library</span>
          </li>
          <li className="flex items-center space-x-4">
            <Explore  sx={iconStyles}  />
            <span>Discover</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <Settings sx={iconStyles} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-4">
            <Logout sx={iconStyles} />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
