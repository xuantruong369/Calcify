const performCalculation = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }

      return a / b;

    default:
      throw new Error("Invalid operator");
  }
};

module.exports = {
  performCalculation,
};
