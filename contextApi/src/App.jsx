import { useState } from "react";
import "./App.css";
import UserContext from "./Context/usercontext";

function App() {
  return (
    <UserContext.Provider>
      <h1>hello this is a context api </h1>
    </UserContext.Provider>
  );
}

export default App;
