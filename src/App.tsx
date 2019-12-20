import React, { useState, useEffect } from "react";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

const App: React.FC = () => {
 
  return (
    <>
      <div className="App">
      <HookCounterTwo/>
      </div>
    </>
  );
};

export default App;
