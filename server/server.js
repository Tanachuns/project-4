// Import the top-level function of express
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
app.use(cors());
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.listen(3050, function () {
  console.log("Server listening on http://localhost:" + 3050);
});
