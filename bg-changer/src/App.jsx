import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-gray-200 gap-2 p-5 rounded-lg flex flex-wrap justify-center shadow-lg">
        <button
          className="bg-red-600 text-white text-2xl px-4 py-2 rounded-lg m-2"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="bg-blue-600 text-white text-2xl px-4 py-2 rounded-lg m-2"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="bg-pink-600 text-white text-2xl px-4 py-2 rounded-lg m-2"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>

        <button
          className="bg-white text-black text-2xl px-4 py-2 rounded-lg m-2 border"
          onClick={() => setColor("white")}
        >
          White
        </button>

        <button
          className="bg-orange-600 text-white text-2xl px-4 py-2 rounded-lg m-2"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
