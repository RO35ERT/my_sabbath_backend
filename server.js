const express = require("express");
const db = require("./models/");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, welcome to My Sabbath Backend!");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
