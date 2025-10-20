import React from "react";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    console.log(title);
    setDescription("");
    console.log(description);
  };

  const randerTasks = <h2>No Task here!</h2>;
  return (
    <>
      <h1 className="bg-black text-white py-8 text-center text-4xl font-bold underline underline-offset-4">
        My Todo List!
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter List Title"
          className="px-1 py-1  border-4 border-zinc-600 text-4xl m-6 non"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description Here"
          className="px-1 py-1  border-4 border-zinc-600 text-4xl m-6 non"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="text-2xl  bg-black px-3 m-4 py-3 text-white rounded hover:bg-zinc-600">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-zinc-400">{randerTasks}</div>
    </>
  );
}

export default App;
