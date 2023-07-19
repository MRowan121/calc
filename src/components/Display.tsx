import React from "react";

interface DisplayProps {
  displayValue: string;
}

const Display = ({ displayValue }: DisplayProps) => {
  return (
    <div className="w-full h-20 bg-white flex justify-end items-center px-2 border-red-400 border-2 text-black text-5xl">
      {displayValue}
    </div>
  );
};

export default Display;
