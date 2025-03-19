import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");  // Added name field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }), // name added properly
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! You can now log in.");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ml-[650px]">
      <div className="bg-[white] w-[500px] h-[450px] p-8 rounded shadow-lg w-96 border border-[#ce30b6]">
        <h2 className="text-2xl font-bold mb-4 underline text-center text-[#ce30b6]">Registration</h2>
        <form className="flex flex-col ml-[98px]" onSubmit={handleRegister}>
          <label className="text-[#ce30b6] text-[18px]">Name:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4] text-[#000000]"
            type="text"  // Fixed input type
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">Email:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4] text-[#000000]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <label className="text-[#ce30b6] mt-[20px] text-[18px]">Password:</label>
          <input
            className="border p-2 mb-3 w-[300px] h-[30px] bg-[#f7e6f4] text-[#000000]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <p className="text-[#ce30b6] ml-[20px] text-[18px]">
            Back To Login Page <a href="/login" className="text-[#ce30b6] underline ">Click Here</a>
          </p>

          <button type="submit" className="bg-[white] text-[#ce30b6] hover:text-[#ffffff] border border-[#ce30b6] pointer bold py-2 w-[150px] h-[45px] ml-[70px] hover:bg-[#ce30b6] mt-[20px] text-[18px]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
