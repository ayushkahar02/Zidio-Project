

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AddTeam from "../components/AddTeam";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userRole = localStorage.getItem("role"); // Get the role from localStorage

  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("teamMembers")) || [];
    setTeamMembers(savedMembers);
  }, []);

  const handleAddMember = (newMember) => {
    const updatedMembers = [...teamMembers, newMember];
    setTeamMembers(updatedMembers);
    localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
  };

  const handleDeleteMember = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
    localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
  };

  return (
    <div className="flex h-screen w-screen bg-[black] bg-[black]">
      <Navbar />
      <div className="flex flex-col ml-[200px] w-full mt-[50px] p-4 bg-white rounded shadow h-[570px]">
        <div className="flex justify-between items-center mb-4 w-[1200px]">
          <h2 className="text-2xl font-bold text-[#8357DA]">Team Members</h2>
          
          {userRole === "admin" && ( // Only show button if user is admin
            <button
              className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] py-2 w-[170px] h-[50px] hover:bg-[#8357DA]"
              onClick={() => setIsModalOpen(true)}
            >
              + Assign Task
            </button>
          )}
        </div>
        
        <table className="w-[1300px] border-collapse border border-gray-300 border border-[#8357DA] mt-[60px]">
          <thead>
            <tr className="bg-gray-200 border border-[#8357DA] text-[white]">
              <th className="border border-[#8357DA] p-2">Full Name</th>
              <th className="border border-[#8357DA] p-2">Email</th>
              <th className="border border-[#8357DA] p-2">Role</th>
              <th className="border border-[#8357DA] p-2">Task</th>
              <th className="border border-[#8357DA] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className="text-center text-[white]">
                <td className="border border-[#8357DA] p-2">{member.name}</td>
                <td className="border border-[#8357DA] p-2">{member.email}</td>
                <td className="border border-[#8357DA] p-2">{member.role}</td>
                <td className="border border-[#8357DA] p-2">{member.task}</td>

                <td className="border border-[#8357DA] p-2">
                  {userRole === "admin" && ( // Only admin can delete
                    <button 
                      className="bg-[black] text-[#8357DA] border border-none hover:underline" 
                      onClick={() => handleDeleteMember(index)}
                    >
                      Delete
                    </button>
                  )}

                 {userRole === "user" && ( // Only user can add
                    <a href="/task"><button 
                      className="bg-[black] text-[#8357DA] border border-none hover:underline" 
                      
                    >
                      add progress
                    </button></a>
                  )}
                </td>
              </tr>
            ))}
            {teamMembers.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-[white]  py-4">
                  No members available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {isModalOpen && <AddTeam onClose={() => setIsModalOpen(false)} onAddMember={handleAddMember} />}
    </div>
  );
};

export default Team;
