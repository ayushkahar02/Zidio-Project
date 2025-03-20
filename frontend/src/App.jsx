import "./output.css"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Task from "./pages/Task";
import CompletedTasks from "./pages/CompletedTasks";
import ChatPage from "./pages/ChatPage";
import Team from "./pages/Team";





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task" element={<Task />} />
        <Route path="/chatpage" element={<ChatPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/completedtasks" element={<CompletedTasks />} />

      </Routes>
    </Router>
  );
};

export default App;

