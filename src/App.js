import React, { useState } from "react";
import "./App.css";

const initState = {
  name: "",
  age: null
};
function App() {
  const [obj, setObj] = useState(initState);

  const nameChange = e => {
    const copyObj = { ...obj };
    copyObj.name = e.target.value;
    setObj(copyObj);
  };

  const setValue = () => {
    const copyObj = { ...obj };
    copyObj.name = "default";
    setObj(copyObj);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={nameChange} value={obj.name} />
        <span>{obj.name}</span>
        <button onClick={setValue}>Set</button>
      </header>
    </div>
  );
}

export default App;
