import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (operator) => {
    setOperation(operator);
  };

  const calculate = () => {
    let calculatedResult;
    switch (operation) {
      case "+":
        calculatedResult = Number(num1) + Number(num2);
        break;
      case "-":
        calculatedResult = Number(num1) - Number(num2);
        break;
      case "*":
        calculatedResult = Number(num1) * Number(num2);
        break;
      case "/":
        calculatedResult = Number(num1) / Number(num2);
        break;
      default:
        calculatedResult = "";
    }
    setResult(`Operation ${operation}: ${calculatedResult}`);
  };

  const resetValues = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperation("");
  };

  return (
    <div>
      <h1>Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <li>
        <br />
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <br />
      </li>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <h4>🟰</h4>
      <span>{result}</span>

      <div>
        <button onClick={calculate}>Calculate</button>
        <button onClick={resetValues}>Reset</button>
      </div>
    </div>
  );
};

export default Calculator;
