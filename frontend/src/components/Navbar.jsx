// original
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay (Appears when navbar is open) */}

      <div style={{ background: "red" }}
        className="fixed top-5 left-5 bg-black bg-opacity-50  cursor-pointer p-1 text-white rounded "
        onClick={() => setIsOpen(true)} // Clicking outside closes navbar
      >
        <svg class="w-6 h-6 text-gray-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      </div>

      {/* Sidebar */}
      <div className={` relative bg-gray-500 z-50 left-0 top-0 h-screen ${isOpen ? "w-[220px]" : ""} bg-gray-900 text-white p-4 transition-transform duration-300 z-50 
        ${isOpen ? "block" : "hidden"}`}>

        {/* Close Button (Mobile Only) */}
        <button
          className=" text-gray-500 text-2xl absolute right-4 top-8 "
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>



        {/* Sidebar Menu */}
        <h1 className="text-2xl font-bold mb-4 p-2 rounded bg-gray-800 text-[#8357DA]">TaskMe</h1>
        <ul className="space-y-3">
          <li><Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
          <li><Link to="/task" className="block p-2 hover:bg-gray-700 rounded">Tasks</Link></li>
          <li><Link to="/completedtasks" className="block p-2 hover:bg-gray-700 rounded">Completed</Link></li>
          {/* <li><Link to="/progress" className="block p-2 hover:bg-gray-700 rounded">In Progress</Link></li> */}
          <li><Link to="/team" className="block p-2 hover:bg-gray-700 rounded">Team</Link></li>
          <li><Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link></li>
        </ul>
      </div>

      {/* Menu Button (Mobile) */}
      <button
        className={`fixed top-4 left-4 md:hidden text-white text-2xl p-2 rounded-full z-50 transition-all duration-300 
          ${isOpen ? "bg-gray-700" : "bg-black"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
};

export default Navbar;
