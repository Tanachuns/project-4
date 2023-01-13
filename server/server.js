const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser").json();

const app = express();
app.use(cors());
app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use("/user", routes.user);

app.listen(3050, function () {
  console.log("Server listening on http://localhost:" + 3050);
});
