import React, { useContext, useState } from "react";
import userContext from "../Context/UserContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username }); // Sending the data to the "Global Store"
  };

  return (
    <div className="p-4 bg-slate-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter name (e.g., ramit)"
        className="border p-2 rounded mr-2 text-black"
      />
      <button 
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded transition ease-in-out duration-[100ms] hover:scale-110 "
      >
        Submit
      </button>
    </div>
  );
};

export default Login;