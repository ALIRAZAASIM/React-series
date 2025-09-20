import React from "react"; // 👈 add this line at top
import Card from "./component/card.jsx"; // 👈 import the card component

function App() {
  return (
    <>
      <h1 className=" bg-amber-50 flex justify-center items-center p-5 font-bold">
        Tailwind + props
      </h1>
      <Card username="science of bio" />
      <br />
      <Card username="science of chemistry" />
    </>
  );
}
export default App;
