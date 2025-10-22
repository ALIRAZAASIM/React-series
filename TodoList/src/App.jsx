import React from "react";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setDescription("");
    setTasks([...tasks, { title, description }]);
    console.log(tasks);
  };

  const deleteTask = (i) => {
    const copytask = [...tasks];
    copytask.splice(i, 1);
    setTasks(copytask);
  };

  let randerTasks = <h2>No Task here!</h2>;
  if (tasks.length > 0) {
    randerTasks = tasks.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-2.5 bg-white rounded p-4">
          <div className=" flex justify-between text-2xl font-bold mb-2 w-2/3">
            <h3>{t.title}</h3>
            <h4>{t.description}</h4>
          </div>
          <button
            className="bg-red-400 text-2xl p-2.5 rounded-b-sm hover:bg-red-600"
            onClick={() => {
              deleteTask(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

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
