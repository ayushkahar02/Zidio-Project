import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock authentication (Replace this with actual logic if needed)
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("token", "mockToken");
      localStorage.setItem("role", "admin"); // Admin role
      navigate("/dashboard");
    } else if (email && password) {
      localStorage.setItem("token", "mockToken");
      localStorage.setItem("role", "user"); // User role
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ml-[650px] ">
      <div className="bg-[white] w-[500px] h-[370px] p-8 rounded shadow-lg w-96 border border-[#ce30b6] ">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#ce30b6]">Login</h2>
        <form className="flex flex-col ml-[98px]" onSubmit={handleLogin}>
          <label className="text-[#ce30b6] text-[20px]">Email:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label className="text-[#ce30b6] mt-[20px] text-[20px]">Password:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <p className="text-[#ce30b6] ml-[20px] text-[18px]">
            Don't Have An Account <a href="/register"  className="text-[#ce30b6] underline " >Create Now</a>
          </p>
          <button 
            type="submit" 
            className="bg-[white] text-[#ce30b6] hover:text-[#ffffff] border border-[#ce30b6] pointer bold py-2 w-[150px] h-[45px] ml-[70px] hover:bg-[#ce30b6] mt-[20px] text-[18px]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


