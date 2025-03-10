import React, { useState, useEffect } from "react";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  // useEffect(() => {
  //   const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
  //   setCompletedTasks(storedCompletedTasks);
  // }, []);

  useEffect(() => {
    const savedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setCompletedTasks(savedCompletedTasks);
  }, []);
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Completed Tasks</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {completedTasks.length > 0 ? (
          completedTasks.map((task, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <p className="text-green-500 text-sm">COMPLETED</p>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-sm text-gray-600">{task.date}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No completed tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
