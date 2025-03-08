

import { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState({ title: "", assignedTo: "", dueDate: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.assignedTo || !task.dueDate) {
      alert("Please fill out all fields.");
      return;
    }
    onSubmit(task); // Pass task data to parent component
  };

  return (
    <form className="flex flex-col bg-[black] border border-[#8357DA] w-[450px] h-[320px] p-6 shadow-lg rounded-lg " onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">Task Form</h2>
      <input
        className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb] ml-[80px]"
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb] ml-[80px] mt-[20px]"
        type="text"
        name="assignedTo"
        placeholder="Assign to (e.g., John Doe)"
        value={task.assignedTo}
        onChange={handleChange}
        required
      />
      <input
        className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb] ml-[80px] mt-[20px]"
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-[black] hover:text-[#ffffff] text-[#8357DA] border border-[#8357DA] pointer bold py-2 w-[150px] h-[45px] ml-[160px] hover:bg-[#8357DA] mt-[20px]">
        Submit Task
      </button>
    </form>
  );
};

export default TaskForm;


