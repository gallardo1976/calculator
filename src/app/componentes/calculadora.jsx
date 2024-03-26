"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
    console.log("value", value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression));
    } catch (error) {
      setExpression("Error");
    }
  };
  console.log("expresion", expression);

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <div className="bg-gray-200 rounded p-4 w-64 mx-auto mt-10">
      <input
        type="text"
        value={expression}
        disabled
        className="w-full mb-2 p-2 border rounded text-black border-cyan-950"
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={clearExpression}
          className="col-span-3 bg-red-500 text-white p-2 rounded"
        >
          C
        </button>
        <button
          onClick={() => handleClick("/")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          /
        </button>
        <button
          onClick={() => handleClick("*")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          *
        </button>
        <button
          onClick={() => handleClick("7")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          9
        </button>
        <button
          onClick={() => handleClick("+")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => handleClick("4")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className="bg-blue-500 text-white p-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => handleClick("1")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          3
        </button>
        <button
          onClick={calculateResult}
          className="bg-green-500 text-white p-2 rounded col-span-1"
        >
          =
        </button>
        <button
          onClick={() => handleClick("0")}
          className="bg-gray-500 text-white p-2 rounded col-span-2"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="bg-gray-500 text-white p-2 rounded"
        >
          .
        </button>
        <div className="col-span-4 flex justify-center text-xs">
          <span className="text-gray-500">Gallardo2024</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
