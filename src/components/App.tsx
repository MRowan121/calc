import React, { useState } from "react";
import Pad from "./Pad";
import Display from "./Display";

function App() {
  const [input, setInput] = useState("0");

  const handleClick = (buttonName: string) => {
    validateNum(buttonName);
  };

  const validateNum = (buttonName: string) => {
    console.log(buttonName);
    isNaN(+buttonName) ? console.log("symbol") : console.log("number");
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
