// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";

// const TaskPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="p-6">
     

//       {setIsModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <h2 className="text-xl font-bold mb-4">ADD TASK</h2>
//             <input
//               type="text"
//               placeholder="Task Title"
//               className="w-full p-2 border rounded mb-4"
//             />
//             <select className="w-full p-2 border rounded mb-4">
//               <option>New User</option>
//               <option>John Doe</option>
//             </select>
//             <div className="flex justify-between mb-4">
//               <select className="w-1/2 p-2 border rounded">
//                 <option>TODO</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </select>
//               <input
//                 type="date"
//                 className="w-1/2 p-2 border rounded ml-2"
//               />
//             </div>
//             <select className="w-full p-2 border rounded mb-4">
//               <option>NORMAL</option>
//               <option>HIGH</option>
//               <option>LOW</option>
//             </select>
//             <div className="flex justify-end gap-4">
//               <button
//                 className="px-4 py-2 border rounded"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskPage;



import React, { useState } from "react";

const CreateTaskModal = ({ onClose, onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [priority, setPriority] = useState("NORMAL");
  const [progress, setProgress] = useState("Inprogress");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDate) {
      alert("Please fill in all fields!");
      return;
    }

    // Create a new task object
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      progress: progress,
      date: taskDate,
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
    <div className="fixed inset-0 flex items-center justify-center bg-[black] border border-[#8357DA] bg-opacity-50 ml-[650px] mt-[200px]">
      <div className="bg-white p-6 rounded shadow-lg w-96 h-[540px] w-[450px]">
        <h2 className="text-xl font-semibold ml-[170px] mb-4 text-[#8357DA]">Add Task</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col ml-[50px] ">
        <label className="text-[#8357DA]">Task Title:</label>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#e0e0eb]"
          />

            <label className="text-[#8357DA] mt-[20px]">Progress:</label>
           
            <select
           value={progress} 
           onChange={(e) => setProgress(e.target.value)}
           className="border p-2 mb-3 w-[350px] h-[40px] bg-[#e0e0eb]">
                <option Value="InProgress">In Progress</option>
                <option value="complete">Completed</option>
              </select>
          
              <label className="text-[#8357DA] mt-[20px]">Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#e0e0eb]"
          >
            <option value="NORMAL">Normal</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>

          <label className="text-[#8357DA] mt-[20px]">date:</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="border p-2 mb-3 w-[350px] h-[40px] bg-[#e0e0eb]"
          />

          <div className="flex mt-[50px] ml-[125px]">
            <button type="button" onClick={onClose} className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[100px] h-[45px]  hover:bg-[#8357DA] ">Cancel</button>
            <button type="submit" className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[100px] h-[45px]  hover:bg-[#8357DA]  ml-[25px]">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;

