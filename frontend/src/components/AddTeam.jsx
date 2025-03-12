

import React, { useState } from "react";

const AddMemberModal = ({ onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    task:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      alert("Please fill all fields");
      return;
    }

    onAddMember(formData);
    setFormData({ name: "", email: "", role: "", task:"" });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ml-[650px] mt-[200px]">
      <div className="bg-[black] w-[450px] h-[500px] p-8 rounded shadow-lg border border-[#8357DA]">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">Assign Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col ml-[70px]">
          <label className="text-[#8357DA]">User Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]"
          />
          <label className="text-[#8357DA] mt-[20px]">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]"
          />
          <label className="text-[#8357DA] mt-[20px]">Role:</label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]"
          />
           <label className="text-[#8357DA] mt-[20px]">Task Name:</label>
          <input
            type="text"
            name="task"
            placeholder="task"
            value={formData.task}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]"
          />

          <div className="flex ml-[100px] mt-[40px]">
            <button
              type="button"
              onClick={onClose}
              className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[#8357DA]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[#8357DA] ml-[20px]"
            >
              Add 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMemberModal;

