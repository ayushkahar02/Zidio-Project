import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      {/* Overlay (Appears when navbar is open) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Clicking outside closes navbar
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-screen w-[220px] bg-gray-700 text-white p-4 transition-transform duration-300 z-50 
        ${isSidebarOpen ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"}`}>
        
        {/* Close Button (Mobile Only) */}
        <button 
          className="md:hidden text-white text-2xl absolute right-4 top-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Sidebar Menu */}
        <h1 className="text-2xl font-bold mb-4 p-2 rounded bg-gray-600 text-[#8357DA]">TaskMe</h1>
        <ul className="space-y-3">
          <li><Link to="/dashboard" className="block p-2 hover:bg-gray-600 rounded">Dashboard</Link></li>
          <li><Link to="/task" className="block p-2 hover:bg-gray-600 rounded">Tasks</Link></li>
          <li><Link to="/completed" className="block p-2 hover:bg-gray-600 rounded">Completed</Link></li>
          <li><Link to="/progress" className="block p-2 hover:bg-gray-600 rounded">In Progress</Link></li>
          <li><Link to="/team" className="block p-2 hover:bg-gray-600 rounded">Team</Link></li>
          {/* <li><Link to="/settings" className="block p-2 hover:bg-gray-600 rounded">Settings</Link></li> */}
        </ul>
      </div>

      {/* Menu Button (Mobile) */}
      <button 
        className={`fixed top-4 left-4 md:hidden text-white text-2xl p-2 rounded-full z-50 transition-all duration-300 
          ${isSidebarOpen ? "bg-gray-600" : "bg-gray-800" }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
};

export default Navbar;
