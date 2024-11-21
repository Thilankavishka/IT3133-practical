import React, { useState } from "react";
import ChildCom from "./components/ChildCom";

function App() {
  const [childname, setChildname] = useState("Default");
  const receiveName = (name) => {
    setChildname(name);
  };
  return (
    <>
      <div className="App">
        <h2>Hello React I'm Parent</h2>
        <ChildCom setfun={receiveName} />
        <p>Parent:My child said:{childname}</p>
      </div>
    </>
  );
}

export default App;
