const express = require("express");
const cors = require("cors");
const calculatorRoutes = require("./routes/calculatorRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/calculator", calculatorRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Calculator API running",
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
