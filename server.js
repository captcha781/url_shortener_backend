require("dotenv").config();
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(require("./routes/routes"));


// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Sorry, Something went wrong, Please Try Again...",
  });
});

//Server
app.listen(5000, () => {
  console.log("Server Runs on port 5000...");
});
