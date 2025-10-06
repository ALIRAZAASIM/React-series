// src/Context/components/Login.jsx
import React, { useState, useContext } from "react";
import UserContext from "../usercontext"; // 👈 adjust this path if needed

function Login() {
  const [uservalue, setUservalue] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(UserContext); // 👈 this will work once context is valid

  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ uservalue, password });
  };

  return (
    <div>
      <h2>Login User</h2>
      <input
        type="text"
        value={uservalue}
        onChange={(e) => setUservalue(e.target.value)}
        placeholder="Username"
      />
      {"   "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
