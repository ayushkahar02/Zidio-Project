import React, { useState } from "react";

const CreateTaskModal = ({ onClose, onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("NORMAL");
  const [progress, setProgress] = useState("Select");

  // Function to get the current time in HH:MM AM/PM format
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDate) {
      alert("Please fill in all fields!");
      return;
    }

    // Create a new task object with time
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      progress: progress,
      date: taskDate,
      time: getCurrentTime(), // Automatically add the current time
      priority: priority.toUpperCase(),
    };

    // Send data to parent component
    onSubmit(newTask);

    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setPriority("NORMAL");
    setProgress("InProgress");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-[450px]">
        
        {/* Modal Header */}
        <h2 className="text-xl font-semibold text-center mb-6 text-[#8357DA]">
          Add Task
        </h2>

        {/* Task Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

          {/* Task Title */}
          <div>
            <label className="text-[#8357DA] font-medium">Task Title:</label>
            <input
              type="text"
              placeholder="Enter Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]"
            />
          </div>

          {/* Progress Selection */}
          <div>
            <label className="text-[#8357DA] font-medium">Progress:</label>
            <select
              value={progress} 
              onChange={(e) => setProgress(e.target.value)}
              className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]"
            >
              <option className="text-[#807d7d]" >Select</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority Selection */}
          <div>
            <label className="text-[#8357DA] font-medium">Priority:</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]"
            >
              <option value="NORMAL">Normal</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          {/* Task Date */}
          <div>
            <label className="text-[#8357DA] font-medium">Date:</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="border p-2 w-full bg-[#e0e0eb] rounded text-[#000000]"
            />
          </div>

          {/* Buttons Section */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#8357DA] text-white hover:text-white border border-[#8357DA] py-2 px-6 rounded px-4 mt-[6px] cursor-pointer "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#8357DA] text-white hover:text-white border border-[#8357DA] py-2 px-6 rounded ml-[2rem] px-4 mt-[6px] cursor-pointer"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
