import React, { useState, useEffect } from "react";

// Modal Component
const AddMemberModal = ({ onClose, onAddMember }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    task: "",
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
    setFormData({ name: "", email: "", role: "", task: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[450px] h-[500px] p-8 rounded shadow-lg border border-[#8357DA]">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">
          Assign Task
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="text-[#8357DA] text-[18px]">User Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
          />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
          />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Role:</label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
          />
          <label className="text-[#8357DA] mt-[10px] text-[18px]">Task Name:</label>
          <input
            type="text"
            name="task"
            placeholder="Task"
            value={formData.task}
            onChange={handleChange}
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
          />

          <div className="flex mt-[20px]">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-[#8357DA] hover:text-white border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[#8357DA] text-[18px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-[#8357DA] hover:text-white border border-[#8357DA] py-2 w-[100px] h-[45px] hover:bg-[v] ml-[20px] text-[18px]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Component
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMember = (memberData) => {
    console.log("New Member Added:", memberData);
    handleCloseModal();
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="p-10 flex flex-col items-center">
      <button
        onClick={handleOpenModal}
        className="bg-[#8357DA] text-white px-4 py-2 rounded"
      >
        Assign Task
      </button>

      {isModalOpen && (
        <AddMemberModal onClose={handleCloseModal} onAddMember={handleAddMember} />
      )}
    </div>
  );
};

export default App;
