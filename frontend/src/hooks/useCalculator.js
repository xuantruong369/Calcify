import { useState } from "react";
import { calculate, getHistories } from "../services/calculatorService";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [histories, setHistories] = useState([]);

  const operators = ["+", "-", "*", "/"];
  const resetDisplay = "AC";
  const btnEquals = "=";

  const handleButtonClick = (value) => {
    if (value === btnEquals) {
      handleCalculate();
      return;
    }

    if (value === resetDisplay) {
      setDisplay("0");
      return;
    }

    if (operators.includes(value)) {
      setOperator(value);
      setDisplay(display + value);
    }

    if (display === "0") {
      setDisplay(value);
      return;
    }

    setDisplay(display + value);
  };

  const handleCalculate = async () => {
    try {
      setLoading(true);
      setError("");

      const expression = display;

      const matched = expression.match(/(\d+)([-+*/])(\d+)/);

      if (!matched) {
        setError("Invalid expression");
        return;
      }

      const a = Number(matched[1]);
      const operator = matched[2];
      const b = Number(matched[3]);

      console.log("a: ", a);
      console.log("b: ", b);
      console.log("operator: ", operator);

      const response = await calculate({
        a,
        b,
        operator,
      });

      await fetchHistories();

      setDisplay(response.data.result.toString());
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const fetchHistories = async () => {
    try {
      const response = await getHistories();
      setHistories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    display,
    loading,
    error,
    histories,
    handleButtonClick,
  };
}
