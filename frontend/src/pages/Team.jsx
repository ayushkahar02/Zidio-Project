import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const AddMemberModal = ({ onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    task: "",
    completed: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role || !formData.task) {
      alert("Please fill all fields");
      return;
    }

    onAddMember(formData);
    setFormData({ name: "", email: "", role: "", task: "", completed: false });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[450px] h-[500px] p-8 rounded shadow-lg border border-[#8357DA]">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">Assign Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-[#8357DA] text-[18px]">User Name:</label>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]" />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Email:</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]" />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Role:</label>
          <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]" />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Task Name:</label>
          <input type="text" name="task" placeholder="Task" value={formData.task} onChange={handleChange} className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]" />
          <div className="flex mt-[20px] items-center justify-center">
            <button type="button" onClick={onClose} className="bg-white text-[#000000] hover:text-white border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[#8357DA] text-[18px]">Cancel</button>
            <button type="submit" className="bg-white text-[#000000] hover:text-white border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[#8357DA] ml-[20px] text-[18px]">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("teamMembers")) || [];
    setTeamMembers(savedMembers);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMember = (memberData) => {
    const updatedMembers = [...teamMembers, memberData];
    setTeamMembers(updatedMembers);
    localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
    handleCloseModal();
  };

  const handleDeleteMember = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
    localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
  };

  const handleToggleCompleted = (index) => {
    if (role === "admin") {
      const updatedMembers = teamMembers.map((member, i) => 
        i === index ? { ...member, completed: !member.completed } : member
      );
      setTeamMembers(updatedMembers);
      localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-6 ml-[50px]">
        <div className="flex flex-col w-full mt-[50px] p-4 bg-white rounded shadow h-[700px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[30px] font-bold text-[#8357DA]">Team Members</h2>
            {role === "admin" && (
              <button onClick={handleOpenModal} className="bg-white text-[#000000] px-4 py-2 rounded border border-[#8357DA] hover:bg-[#8357DA] hover:text-white">+Assign Task</button>
            )}
          </div>
          {isModalOpen && <AddMemberModal onClose={handleCloseModal} onAddMember={handleAddMember} />}
          <table className="w-full border-collapse bg-white border border-[#8357DA]">
            <thead>
              <tr className="bg-gray-200 border border-[#8357DA] text-black text-[18px]">
                <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Full Name</th>
                <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Email</th>
                <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Role</th>
                <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Task</th>
                <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Status</th>
                {role === "admin" && <th className="border border-[#8357DA] p-2"style={{color:"black"}}>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index} className="text-center text-black text-[18px]">
                  <td className="border border-[#8357DA] p-2"style={{color:"black"}}>{member.name}</td>
                  <td className="border border-[#8357DA] p-2"style={{color:"black"}}>{member.email}</td>
                  <td className="border border-[#8357DA] p-2"style={{color:"black"}}>{member.role}</td>
                  <td className="border border-[#8357DA] p-2"style={{color:"black"}}>{member.task}</td>
                  <td className="border border-[#8357DA] p-2 cursor-pointer" onClick={() => handleToggleCompleted(index)}>{member.completed ? "✅" : "❌"}</td>
                  {role === "admin" && <td className="border border-[#8357DA] p-2"style={{color:"black"}}><button onClick={() => handleDeleteMember(index)} className="bg-red-500 text-white py-2 px-4 rounded"style={{color:"black"}}>🗑</button></td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Team;