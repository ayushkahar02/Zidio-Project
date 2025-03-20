
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

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
  
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error("Login error:", error);
  }
};

  return (
    <div className=" flex flex-col items-center justify-center  bg-gray-100 ml-[500px] " >
      <div className="bg-[white] w-[500px] h-[350px] p-8 rounded shadow-lg w-96 border border-[#8357DA]  ">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#8357DA]">Login</h2>
        <form className="flex flex-col ml-[98px]" onSubmit={handleLogin}>
        <label className="text-[#8357DA]">Email:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb] text-[#000000]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label className="text-[#8357DA] mt-[20px]">Password:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#e0e0eb] text-[#000000]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <p className="text-[black] ml-[20px]">Don't Have An Account <a href="/register">Create Now</a></p>
          <button type="submit" className="bg-[black] text-[#8357DA] hover:text-[#ffffff] border border-[#8357DA] pointer bold py-2 w-[150px] h-[45px] ml-[70px] hover:bg-[#8357DA] mt-[20px]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

