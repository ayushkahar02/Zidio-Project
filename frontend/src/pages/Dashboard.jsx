
import { useState } from "react";
import TaskForm from "../components/TaskForm";


const Dashboard = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, title: "Design UI", assignedTo: "John Doe", dueDate: "2025-03-10" },
    // { id: 2, title: "Build Backend", assignedTo: "Jane Smith", dueDate: "2025-03-12" },
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setIsModalOpen(false); // Close modal after adding task
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-[500px] mt-[200px]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-row">
        <h1 className="text-3xl tex font-bold text-[#8357DA] underline">Task Dashboard</h1>
        <button
          className="bg-[black] hover:text-[#ffffff] text-[#8357DA] border border-[#8357DA]  bold px-4 py-2 hover:bg-[#8357DA] ml-[150px] mt-[40px] h-[50px] w-[200px]"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>

        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ml-[850px] ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl mb-[50px]"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <TaskForm onSubmit={handleAddTask} />
          </div>
        </div>
      )}
        </div>

        {/* Task List */}
        <div className="mb-4">
          {tasks.length === 0 ? (
            <p className="text-[#e0e0eb]">No tasks assigned yet.</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="p-4 border-b border-[#e0e0eb]">
                <h2 className="text-xl text-[#e0e0eb] font-semibold">{task.title}</h2>
                <p className="text-[#e0e0eb]">Assigned to: {task.assignedTo}</p>
                <p className="text-[#e0e0eb]">Due Date: {task.dueDate}</p>
              </div>
            ))
          )}
        </div>

       
      </div>

      {/*Task Form Modal*/}
      {/* {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ml-[300px] ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <TaskForm onSubmit={handleAddTask} />
          </div>
        </div>
      )} */}
        
    </div>
  );
};

export default Dashboard;


