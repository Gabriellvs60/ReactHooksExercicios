import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    return () => {
      setResult (value1 + value2);
      console.log("calcular");
    };
  }, [value1, value2]);

  function calcValues(){
    setResult (value1 + value2);
  }
  return (
    <>
      <div className="App">
        <button onClick={() => setValue(value + 1)}>Click Me</button>
        <h1>{value}</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
        <input
          placeholder={"Valor 1"}
          type="number"
          onChange={e => setValue1(parseInt(e.target.value))}
        />
        <input
          placeholder={"Valor 2"}
          type="number"
          onChange={e => setValue2(parseInt(e.target.value))}
        />
        <button>Calcular</button>
        <h1 style={{ alignSelf: "center" }}>Valor: {result}</h1>
      </div>
    </>
  );
};

export default App;
