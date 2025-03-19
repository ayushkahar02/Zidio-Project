

import React, { useState } from "react";

const CreateTaskModal = ({ onClose, onSubmit }) => {
  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    user: "",
    date: "",
    priority: "LOW",
    progress: "Not Started",
    completed: false, // ✅ Initialize it properly
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      completed: name === "progress" ? value === "Completed" : prevTask.completed, // ✅ Fix completed status
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    onClose(); // ✅ Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[white] border border-[#ce30b6] bg-opacity-50 ml-[700px] mt-[200px]">
      <div className="bg-white p-6 rounded shadow-lg h-[620px] w-[450px]">
        <h2 className="text-lg font-bold underline ml-[170px] mb-4 text-[#ce30b6]">Add Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col ml-[50px] ">
          <label className="text-[#ce30b6] text-[18px]">Task Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#f7e6f4]"
            onChange={handleChange}
            required
          />

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">User Name:</label>
          <input
            type="text"
            name="user"
            placeholder="User Name"
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#f7e6f4]"
            onChange={handleChange}
            required
          />

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">Date:</label>
          <input
            type="date"
            name="date"
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#f7e6f4]"
            onChange={handleChange}
            required
          />

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">Priority:</label>
          <select
            name="priority"
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#f7e6f4]"
            onChange={handleChange}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">Progress:</label>
          <select
            name="progress"
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#f7e6f4]"
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex mt-[50px] ml-[130px]">
            <button type="submit" className="bg-[white] text-[#ce30b6] hover:text-[#ffffff] border border-[#ce30b6] pointer bold py-2 w-[100px] h-[45px] hover:bg-[#ce30b6] text-[18px] ">
              Add
            </button>
            <button type="button" className="bg-[white] text-[#ce30b6] hover:text-[#ffffff] border border-[#ce30b6] pointer bold py-2 w-[100px] h-[45px] hover:bg-[#ce30b6] ml-[20px] text-[18px]" onClick={onClose}>
              Cancel
            </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;

