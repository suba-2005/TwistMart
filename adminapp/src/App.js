import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import './App.css'; // Importing the main CSS file

const App = () => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarHidden(!isSidebarHidden);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isHidden={isSidebarHidden} />
      <div className={`content ${isSidebarHidden ? 'sidebar-hidden' : ''}`}>
        <Navbar onMenuClick={toggleSidebar} onThemeToggle={toggleDarkMode} />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
