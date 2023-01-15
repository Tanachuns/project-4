const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser").json();
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use("/user", routes.user);
app.use("/plan", routes.plan);
app.use("/insurance", routes.insurance);
app.use("/cover", routes.cover);

app.listen(process.env.PORT, function () {
  console.log("Server listening on http://localhost:" + process.env.PORT);
});
