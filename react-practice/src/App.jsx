import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Page from "./components/Page.jsx";
function App() {
  const [name, setName] = useState("MR ALI");
  const [editor, setEditor] = useState("Raza");
  return (
    <>
      <Header name={name} editor={editor} />
      <Page />
    </>
  );
}

export default App;
