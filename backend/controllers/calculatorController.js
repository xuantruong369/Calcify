const { performCalculation } = require("../services/calculatorService");
const histories = require("../constants/historyStore");
const validate = require("../utils/calculatorValidation");

const calculate = (req, res) => {
  try {
    const { a, b, operator } = req.body;

    if (!(validate.isNumber(a) && validate.isNumber(b))) {
      return res.status(400).json({
        success: false,
        message: "Input 'a' and 'b' is number",
      });
    }

    if (!validate.isOperator(operator)) {
      return res.status(400).json({
        success: false,
        message: "Invalid operator",
      });
    }

    const result = performCalculation(a, b, operator);

    histories.push({
      expression: `${a} ${operator} ${b}`,
      result: result,
      timestap: new Date(),
    });

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getHistories = (req, res) => {
  res.json({ success: true, data: histories });
};

module.exports = {
  calculate,
  getHistories,
};
