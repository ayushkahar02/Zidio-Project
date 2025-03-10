import React, { useState,useEffect} from "react";
import TaskModel from "../components/TaskModel";
import Navbar from "../components/Navbar";

const TasksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
  ]);
  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);


const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to local storage
    setIsModalOpen(false); // Close the modal after adding
  };



  const markAsCompleted = (taskIndex) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks[taskIndex];
  
    // Add completed task to completedTasks storage
    const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    localStorage.setItem("completedTasks", JSON.stringify([...completedTasks, completedTask]));
  
    // Keep task in task list but mark it completed
    updatedTasks[taskIndex] = { ...completedTask, completed: true };
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  


  
    // Function to delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Update local storage
      };
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=" flex h-screen bg-gray-100">
        <Navbar/>
        <div className="flex flex-col ml-[100px] w-[1200px] mt-[50px]"> 
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[30px] font-bold text-[#8357DA]">Tasks</h2>
        <button onClick={() => setIsModalOpen(true)}className=" bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[170px] h-[50px]  hover:bg-[#8357DA] ">
          + Create Task
        </button>
      </div>

      
      {/* Task Board */}
      <div className="grid grid-cols-3 gap-[20px] mt-6">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded shadow border border-[#8357DA] ">
                <div>
              <p className={`text-[white] ml-[130px] text-sm ${task.priority === "HIGH" ? "text-red-500" : "text-gray-700"}`}>
                {task.priority} PRIORITY
              </p>
              <h2 className="text-lg ml-[10px] text-[white] font-semibold">Task Title: {task.title}</h2>
              <p className="text-sm  ml-[10px] text-[white] text-gray-600">Date: {task.date}</p>
              <p className="text-sm  ml-[10px] text-[white] text-gray-600">Progress: {task.progress}</p>
            </div>
            <button onClick={() => deleteTask(task.id)} className=" ml-[320px] bg-[black] hover:border-[#8357DA] text-red-500 hover:text-red-700">
            🗑️
          </button>

        
          </div>
          ))
        ) : (
          <p className="text-[white]">No tasks available.</p>
        )}
      </div>


      {/* Task Board
      <div className="grid grid-cols-3 gap-4 mt-6">
      {tasks.length > 0 ? (
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow border border-[#8357DA]">
            <p className="text-[white] ml-[140px] text-sm ">{task.priority} PRIORITY</p>
            <h2 className="text-lg ml-[10px] text-[white] font-semibold">{task.title}</h2>
            <p className="text-sm  ml-[10px]  text-[white]">{task.date}</p>
            <p className="text-sm  ml-[10px] text-[white]">{task.progress}</p>
          </div>
        ))}
      </div> */}
      </div>
      
      
      {isModalOpen && <TaskModel onClose={() => setIsModalOpen(false)} onSubmit={addTask} />}
    </div>
  );
};

export default TasksPage;