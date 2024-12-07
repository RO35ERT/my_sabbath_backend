const express = require("express");
const db = require("./models/");
const bodyParser = require('body-parser');
const authRoutes = require("./routes/AuthRoutes");
const app = express();

const PORT = 3000;
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
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
