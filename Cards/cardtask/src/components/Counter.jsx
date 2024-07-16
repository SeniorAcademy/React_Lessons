import React from "react";
import { useEffect, useState } from "react";

const Counter = () => {
  const [indexFirst, setIndexFirst] = useState(0);
  const [indexSecond, setIndexSecond] = useState(0);

  //   useEffect(() => {
  //     console.log("Her Defe Run Olanda Isleyecek");
  //   });

  useEffect(() => {
    console.log("Salam Vurgun");
  }, []);

  useEffect(() => {
    console.log("Ilk Defe ve Her Deyisiklik olanda");
  }, [indexFirst, indexSecond]);

  return (
    <>
      <div className="bg-green-700 text-gray-100 h-screen flex justify-center items-center  ">
        <div className="flex items-center flex-col mr-8">
          <button
            onClick={() => setIndexFirst(indexFirst + 1)}
            className="px-5 py-1 rounded-md bg-orange-500 text-white text-[30px]"
          >
            1
          </button>
          <span className="capitalize text-3xl text-orange-200">
            {indexFirst}
          </span>
        </div>

        <div className="flex items-center flex-col">
          <button
            onClick={() => setIndexSecond(indexSecond + 1)}
            className="px-5 py-1 rounded-md bg-yellow-500 text-white text-[30px]"
          >
            2
          </button>
          <span className="capitalize text-3xl text-yellow-200">
            {indexSecond}
          </span>
        </div>
      </div>
    </>
  );
};

export default Counter;
