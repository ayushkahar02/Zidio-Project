
// import { useState } from "react";
// import TaskForm from "../components/TaskForm";


// const Dashboard = () => {
//   const [tasks, setTasks] = useState([
//     // { id: 1, title: "Design UI", assignedTo: "John Doe", dueDate: "2025-03-10" },
//     // { id: 2, title: "Build Backend", assignedTo: "Jane Smith", dueDate: "2025-03-12" },
//   ]);
  
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddTask = (newTask) => {
//     setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
//     setIsModalOpen(false); // Close modal after adding task
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 ml-[500px] mt-[200px]">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <div className="flex flex-row">
//         <h1 className="text-3xl tex font-bold text-[#8357DA] underline">Task Dashboard</h1>
//         <button
//           className="bg-[black] hover:text-[#ffffff] text-[#8357DA] border border-[#8357DA]  bold px-4 py-2 hover:bg-[#8357DA] ml-[150px] mt-[40px] h-[50px] w-[200px]"
//           onClick={() => setIsModalOpen(true)}
//         >
//           + Add Task
//         </button>

//         {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ml-[850px] ">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <button
//               className="absolute top-2 right-2 text-gray-500 text-xl mb-[50px]"
//               onClick={() => setIsModalOpen(false)}
//             >
//               ×
//             </button>
//             <TaskForm onSubmit={handleAddTask} />
//           </div>
//         </div>
//       )}
//         </div>

//         {/* Task List */}
//         <div className="mb-4">
//           {tasks.length === 0 ? (
//             <p className="text-[#e0e0eb]">No tasks assigned yet.</p>
//           ) : (
//             tasks.map((task) => (
//               <div key={task.id} className="p-4 border-b border-[#e0e0eb]">
//                 <h2 className="text-xl text-[#e0e0eb] font-semibold">{task.title}</h2>
//                 <p className="text-[#e0e0eb]">Assigned to: {task.assignedTo}</p>
//                 <p className="text-[#e0e0eb]">Due Date: {task.dueDate}</p>
//               </div>
//             ))
//           )}
//         </div>

       
//       </div>

//       {/*Task Form Modal*/}
//       {/* {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ml-[300px] ">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <button
//               className="absolute top-2 right-2 text-gray-500 text-xl"
//               onClick={() => setIsModalOpen(false)}
//             >
//               ×
//             </button>
//             <TaskForm onSubmit={handleAddTask} />
//           </div>
//         </div>
//       )} */}
        
//     </div>
//   );
// };

// export default Dashboard;


import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { title: "Test task", priority: "High", team: ["CA", "JS"], createdAt: "1 year ago" },
    { title: "Duplicate - Review Code Changes", priority: "Medium", team: ["AJ", "EW"], createdAt: "1 year ago" },
    { title: "Website Project Proposal Review", priority: "High", team: ["CA", "JD", "JS"], createdAt: "1 year ago" }
  ]);

  const data = [
    { name: "High", total: 2500 },
    { name: "Medium", total: 1800 },
    { name: "Normal", total: 2900 },
    { name: "Low", total: 1400 }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar/>
     
    

      {/* Main Content */}
      <main className="flex-1 p-6 ml-[200px] w-[1400px]">
        <h1 className="text-2xl font-bold text-[#8357DA]">Dashboard</h1>

        {/* Task Stats */}
        <div className="grid grid-cols-4 gap-4 my-6 text-center">
          <div className="bg-white p-4 rounded w-[250px] shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold text-[white]">Total Task</h3>
            <p className="text-2xl text-[white]">10</p>
          </div>
          <div className="bg-white p-4 w-[250px] rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold text-[white]">Completed Task</h3>
            <p className="text-2xl text-[white]">1</p>
          </div>
          <div className="bg-white p-4 w-[250px] rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold text-[white]">Task In Progress</h3>
            <p className="text-2xl text-[white]">3</p>
          </div>
          <div className="bg-white p-4 w-[250px] rounded shadow border border-[#8357DA]">
            <h3 className="text-lg font-semibold text-[white]">To-Dos</h3>
            <p className="text-2xl text-[white]">6</p>
          </div>
        </div>

        {/* Chart by Priority */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h3 className="text-lg font-semibold mb-4 text-[white]">Chart by Priority</h3>
          <ResponsiveContainer width="100%" height={250}  >
            <BarChart data={data} >
              <XAxis dataKey="name" className="text-[white]" />
              <YAxis  className="text-[white]"/>
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Task List */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4 text-[white]">Task List</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead className="border border-[#8357DA]">
              <tr className=" h-[70px] ">
                <th className="p-2  text-[white] border border-[#8357DA]">Task Title</th>
                <th className="p-2  text-[white] border border-[#8357DA]">Priority</th>
                <th className="p-2  text-[white] border border-[#8357DA]">Team</th>
                <th className="p-2 text-[white] border border-[#8357DA]">Created At</th>
              </tr>
            </thead>
            <tbody className="border border-[#8357DA]">
              {tasks.map((task, index) => (
                <tr key={index} className="text-center text-[white] h-[70px]">
                  <td className="p-2 border border-[#8357DA]">{task.title}</td>
                  <td className="p-2 border border-[#8357DA]">{task.priority}</td>
                  <td className="p-2 border border-[#8357DA]">{task.team.join(", ")}</td>
                  <td className="p-2 border border-[#8357DA]">{task.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

