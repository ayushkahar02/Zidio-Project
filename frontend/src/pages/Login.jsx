
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock login (no API)
    if (email && password) {
      localStorage.setItem("token", "mockToken"); // Fake auth token
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ml-[650px] ">
      <div className="bg-[black] w-[500px] h-[350px] p-8 rounded shadow-lg w-96 border border-[#8357DA] ">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">Login</h2>
        <form className="flex flex-col ml-[98px]" onSubmit={handleLogin}>
        <label className="text-[#8357DA]">Email:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label className="text-[#8357DA] mt-[20px]">Password:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb]  "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <p className="text-[#e0e0eb] ml-[20px]">Don't Have An Account <a href="/register">Create Now</a></p>
          <button type="submit" className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[150px] h-[45px] ml-[70px] hover:bg-[#8357DA] mt-[20px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

