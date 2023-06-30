import React, { useState } from "react";
import Pad from "./Pad";

function App() {
  const [input, setInput] = useState("");

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
        <Pad clickHandler={handleClick} />
      </section>
    </main>
  );
}

export default App;
