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
    window.dispatchEvent(new Event("storage")); // Trigger update in Dashboard
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="flex h-screen w-screen ">
      <Navbar />
      <div className="flex flex-col ml-[200px] w-[1200px] mt-[50px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[30px] font-bold text-[#ce30b6]">Tasks</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[white] text-[#ce30b6] hover:text-[#ffffff] border border-[#ce30b6] py-2 w-[170px] h-[50px] hover:bg-[#ce30b6]"
          >
            + Add Task
          </button>
        </div>

        {/* Task Board */}
        <div className="grid grid-cols-3 gap-[20px] mt-6 ">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded shadow border border-[#ce30b6] bg-[white]"
              >
                <p
                  className={`text-[#ce30b6] ml-[130px] text-[18px] bold ${
                    task.priority === "HIGH" ? "text-[red]" : "text-[#ce30b6]"
                  }`}
                >
                  {task.priority} PRIORITY
                </p>
                
                <h2 className="text-lg ml-[10px] text-[black] font-semibold">
                  Task Title: {task.title}
                </h2>
                <p className="text-[18px] ml-[10px] text-[black] font-semibold">
                  User Name: {task.user}
                </p>
                <p className="text-[18px] ml-[10px] text-[black] text-gray-600">
                  Date: {task.date}
                </p>
                <p className="text-[18px] ml-[10px] text-[black] text-gray-600">
                  Progress: {task.progress}
                </p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-[322px] bg-[white] text-red-500 border hover:border-[#ce30b6]"
                >
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p className="text-[white]">No tasks available.</p>
          )}
        </div>
      </div>

      {isModalOpen && <TaskModel onClose={() => setIsModalOpen(false)} onSubmit={addTask} />}
    </div>
  );
};

export default TasksPage;
