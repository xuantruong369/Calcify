const isNumber = (a) => {
  if (typeof a !== "number") return false;
  return true;
};

const isOperator = (operator) => {
  const validOperators = ["+", "-", "*", "/"];
  if (!validOperators.includes(operator)) return false;
  return true;
};

module.exports = {
  isNumber,
  isOperator,
};
