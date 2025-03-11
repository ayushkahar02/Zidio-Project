import React, { useState, useEffect } from "react";
import TaskModel from "../components/TaskModel";
import Navbar from "../components/Navbar";

const TasksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsModalOpen(false);
  };

  const markAsCompleted = (taskIndex) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks[taskIndex];

    const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    localStorage.setItem("completedTasks", JSON.stringify([...completedTasks, completedTask]));

    updatedTasks[taskIndex] = { ...completedTask, completed: true };
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Navbar />

      {/* Main Content (Scrollable) */}
      <div className="flex flex-col w-full min-h-screen overflow-y-auto p-6 ml-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#8357DA]">Tasks Management</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#8357DA] hover:text-white border border-[#8357DA] py-2 w-[170px] h-[50px] hover:bg-[#8357DA]"
          >
            + Create Task
          </button>
        </div>

        {/* Task Board (No Fixed Position, Now Scrolls) */}
        <div className="grid grid-cols-3 gap-4">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div key={task.id} className="bg-[#7d4ccc] p-4 rounded shadow border border-[#8357DA]">
                <p
                  className={`text-white text-center text-sm font-bold ${
                    task.priority === "HIGH" ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {task.priority} PRIORITY
                </p>
                <div className="mt-2">
                  <h2 className="text-lg text-white">Task Title: {task.title}</h2>
                  <p className="text-sm text-white">Date: {task.date}</p>
                  <p className="text-sm text-white">Time: {task.time}</p>
                  <p className="text-sm text-white">Progress: {task.progress}</p>
                </div>
                <button onClick={() => deleteTask(task.id)} className="mt-2 bg-black text-red-500 hover:text-red-700">
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p className="text-[#8357DA]">No tasks available.</p>
          )}
        </div>
      </div>

      {isModalOpen && <TaskModel onClose={() => setIsModalOpen(false)} onSubmit={addTask} />}
    </div>
  );
};

export default TasksPage;
