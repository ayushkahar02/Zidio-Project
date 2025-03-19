import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskModel from "../components/TaskModel";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  

  const addTask = (newTask) => {
    // Ensure the completed status is explicitly set
    const updatedTask = { ...newTask, completed: newTask.completed ?? false };
    const updatedTasks = [...tasks, updatedTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const priorityCounts = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: "High", total: priorityCounts["HIGH"] || 0 },
    { name: "Medium", total: priorityCounts["MEDIUM"] || 0 },
    { name: "Normal", total: priorityCounts["NORMAL"] || 0 },
    { name: "Low", total: priorityCounts["LOW"] || 0 },
  ];

  return (
    <div className="flex h-full w-screen ">
      <Navbar />
      <main className="flex-1 p-6 ml-[200px] ">
        <h1 className="text-2xl font-bold text-[#ce30b6]">Dashboard</h1>

        <div className="grid grid-cols-3 gap-[200px] my-6 text-center w-[1300px]">
          <div className="bg-[white] p-4 rounded shadow border border-[#ce30b6]">
            <h3 className="text-lg text-[black] font-semibold">Total Tasks</h3>
            <p className="text-[20px] text-[#ce30b6] ">{tasks.length}</p>
          </div>
          <div className="bg-[white] p-4 rounded shadow border border-[#ce30b6]">
            <h3 className="text-lg font-semibold text-[black]">Completed Tasks</h3>
            <p className="text-[20px] text-[#ce30b6]"> {tasks.filter((task) => task.completed === true).length}</p>
          </div>
          <div className="bg-[white] p-4 rounded shadow border border-[#ce30b6]">
            <h3 className="text-lg text-[black] font-semibold">Tasks In Progress</h3>
            <p className="text-[20px] text-[#ce30b6]">  {tasks.filter((task) => task.completed === false).length}</p>
          </div>
        </div>

        <div className="bg-[white] text-[20px] p-6 rounded shadow mb-6 mt-[100px] w-[1300px] h-[350px]">
          <h3 className="text-[20px] ml-[10px] mt-[10px]  text-[black] font-semibold mb-4">Chart by Priority</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" fill="#ce30b6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* <button onClick={() => setIsModalOpen(true)} className="bg-black text-[#8357DA] border border-[#8357DA] py-2 px-4">
          + Create Task
        </button> */}
         <h3 className="text-[25px] font-semibold mb-4 text-[black] mt-[80px]">Task List</h3>
        <div className="grid grid-cols-3 gap-4 ">
          {/* {tasks.map((task, index) => ( */}
          
            <div className="bg-[white] p-4 rounded text-[#ce30b6] w-[1200px]">
              <table className="w-full border-collapse border border-gray-300 ">
              <thead className="border border-[#ce30b6]">
              <tr className=" h-[70px] ">
                <th className="p-2  text-[20px] text-[black] border border-[#ce30b6]">Task Title</th>
                <th className="p-2 text-[20px]  text-[black] border border-[#ce30b6]">User Name</th>
               <th className="p-2 text-[20px] text-[black] border border-[#ce30b6]">Priority</th>
              <th className="p-2 text-[20px] text-[black] border border-[#ce30b6]">Progress</th>
              </tr>
          </thead>
          <tbody className="border border-[#ce30b6]">
          {tasks.map((task, index) => (
          <tr key={task.id} className="text-center text-[black] h-[70px]">
                  <td className="text-[18px] font-semibold text-[black] border border-[#ce30b6]">{task.title}</td>       
                  <td className=" text-[18px] p-2 border border-[#ce30b6]">{task.user}</td>            
                  <td className=" text-[18px] p-2 border border-[#ce30b6]">{task.priority}</td>
                  <td className="text-[18px] p-2 border border-[#ce30b6]">{task.completed ? "Completed" : "In Progress"}</td>
              </tr>
           ))}
          </tbody>

              </table>
              
           </div>
          
        </div>
        <br></br><br></br><br></br><br></br>
      </main>
      {isModalOpen && <TaskModel onClose={() => setIsModalOpen(false)} onSubmit={addTask} />}
      
    </div>
   
  );
};

export default TaskManagementApp;



