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
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 bg-opacity-90 rounded-lg p-4 w-72 mx-auto mt-10 shadow-lg">
      <input
        type="text"
        value={expression}
        disabled
        className="w-full mb-2 p-2 font-bold border rounded text-gray-800 bg-gray-300 border-transparent focus:border-gray-500 focus:bg-white focus:ring-gray-500"
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={clearExpression}
          className="col-span-3 bg-red-800 hover:bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          C
        </button>
        <button
          onClick={() => handleClick("/")}
          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          /
        </button>
        <button
          onClick={() => handleClick("*")}
          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          *
        </button>
        <button
          onClick={() => handleClick("7")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          9
        </button>
        <button
          onClick={() => handleClick("+")}
          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          +
        </button>
        <button
          onClick={() => handleClick("4")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          6
        </button>
        <button
          onClick={() => handleClick("-")}
          className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          -
        </button>
        <button
          onClick={() => handleClick("1")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          3
        </button>
        <button
          onClick={calculateResult}
          className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-lg col-span-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          =
        </button>
        <button
          onClick={() => handleClick("0")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg col-span-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          .
        </button>
        <div className="col-span-4 flex justify-center text-sm text-gray-500">
          <span>Gallardo2024</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
