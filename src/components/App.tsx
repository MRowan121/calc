import React, { useState } from "react";
import Pad from "./Pad";
import Display from "./Display";

function App() {
  const [input, setInput] = useState("0");
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState("0");

  const handleClick = (buttonName: string) => {
    validateNum(buttonName);
    clearHistory(buttonName);
  };

  const validateNum = (buttonName: string) => {
    isNaN(+buttonName) ? console.log("symbol") : updateInput(buttonName);
  };

  const updateInput = (buttonName: string) => {
    input === "0" ? setInput(buttonName) : setInput(input + buttonName);
  };

  const clearHistory = (buttonName: string) => {
    if (buttonName === "AC") {
      setInput("0");
      setOperation("");
      setTotal("0");
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <section className="w-96">
        <Display displayValue={input} />
        <Pad clickHandler={handleClick} />
      </section>
    </main>
  );
}

export default App;
