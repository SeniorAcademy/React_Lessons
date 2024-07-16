import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncreamnet = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    // setCount(prevCount => prevCount + 1)
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // setCount(prevCount => prevCount - 1)
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <button
          onClick={handleIncreamnet}
          className="flex items-center pb-1  px-3 bg-green-300 text-4xl rounded-lg text-green-800 transition-all duration-500 cursor-pointer hover:opacity-75"
        >
          +
        </button>
        <h3 className="mx-5 text-5xl font-bold transition-all duration-500 cursor-pointer hover:scale-125">
          {count}
        </h3>
        <button
          onClick={handleDecrement}
          className="flex items-center pb-1  px-[17px] bg-red-300 text-4xl rounded-lg text-red-800 transition-all duration-500 cursor-pointer hover:opacity-75"
        >
          -
        </button>
      </div>
    </>
  );
};

export default Count;
