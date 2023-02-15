const express = require("express");
const app = express();
const cors = require("cors");
const formRoutes = require("./src/form/form.routes");
const userRoutes = require("./src/user/user.routes");
const { db } = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 5000;

app.use("/api/v1", [formRoutes, userRoutes]);

app.use("/api/v1/static", express.static(`${__dirname}/uploads`));

app.listen(PORT, async () => {
  await db();
  console.log(`Server running on port ${PORT}`);
});
