import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Task Statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.progress === "Completed").length;
  const inProgressTasks = tasks.filter((task) => task.progress === "In Progress").length;
  const toDoTasks = totalTasks - (completedTasks + inProgressTasks);

  // Chart Data (Task Count by Priority)
  const priorityCounts = tasks.reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(priorityCounts).map((priority) => ({
    name: priority,
    total: priorityCounts[priority],
  }));

  return (
    <div className="flex h-screen w-screen bg-gray-100 ">
      {/* Fixed Sidebar */}
      <Navbar />

      {/* Main Content - Full Width, Scrollable */}
      <div className="flex-1 overflow-y-auto p-6 ml-[50px]">
       <div className="text-2xl font-bold text-[#8357DA] ml-[0px]">
       <h1 >Dashboard</h1>
       </div>

        {/* Task Stats */}
        <div className="grid grid-cols-4 gap-4 my-6 text-center text-gray-500">
          <div className="bg-white p-4 rounded w-40 shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold">Total Task</h3>
            <p className="text-2xl">{totalTasks}</p>
          </div>
          <div className="bg-white p-4 w-40 rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold">Completed Task</h3>
            <p className="text-2xl">{completedTasks}</p>
          </div>
          <div className="bg-white p-4 w-40 rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold">Task In Progress</h3>
            <p className="text-2xl">{inProgressTasks}</p>
          </div>
          <div className="bg-white p-4 w-40 rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold">To-Dos</h3>
            <p className="text-2xl">{toDoTasks}</p>
          </div>
        </div>

        {/* Chart by Priority */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">Chart by Priority</h3>
          <ResponsiveContainer width="40%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" className="text-gray-500" />
              <YAxis className="text-gray-500" />
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Task List */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-500">Task List</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="border border-[#8357DA]">
              <tr className="h-[70px]">
                <th className="p-2 text-gray-500 border border-[#8357DA]">Task Title</th>
                <th className="p-2 text-gray-500 border border-[#8357DA]">Priority</th>
                <th className="p-2 text-gray-500 border border-[#8357DA]">Progress</th>
                <th className="p-2 text-gray-500 border border-[#8357DA]">Created At</th>
              </tr>
            </thead>
            <tbody className="border border-[#8357DA]">
              {tasks.map((task, index) => (
                <tr key={index} className="text-center text-gray-500 h-[70px]">
                  <td className="p-2 border border-[#8357DA]">{task.title}</td>
                  <td className="p-2 border border-[#8357DA]">{task.priority}</td>
                  <td className="p-2 border border-[#8357DA]">{task.progress}</td>
                  <td className="p-2 border border-[#8357DA]">{task.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
