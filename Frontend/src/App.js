import React from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className="app">
      <input type="checkbox" id="check" />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
