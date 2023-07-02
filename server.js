const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./src/routes/coffee-routes");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/coffees", router);

app.use(express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase Connected!"))
  .then(() => {
    app.listen(PORT, () => {
      console.warn(`App listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
