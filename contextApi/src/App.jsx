// src/App.jsx
import React, { useState } from "react";
import UserContext from "./Context/usercontext";
import Login from "./Context/components/Login";
import Profile from "./Context/components/Profile";

function App() {
  const [user, setuser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
