// Import the top-level function of express
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.listen(3000, function () {
  console.log("Server listening on http://localhost:" + 3000);
});
