// SideNavbar.js

"use client"
import React, { useState } from 'react';

const SideNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`fixed h-full bg-gray-800 text-white ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
      <button onClick={toggleSidebar} className="absolute top-4 left-4 text-white focus:outline-none">
        Toggle Sidebar
      </button>
      <nav className="pt-16 pl-4">
        {/* Your navigation links go here */}
        <ul>
          <li className="py-2">Link 1</li>
          <li className="py-2">Link 2</li>
          <li className="py-2">Link 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
