// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUser = async (req, res) => {
  const user = await prisma.user.findMany().catch((e) => {
    res.status(500).send(e.message);
  });
  res.status(200).json(user);
};

const getOneUser = async (req, res) => {
  const user = await prisma.user
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).json(user);
};

const crateUser = async (req, res) => {
  req.body.birth_date = new Date(req.body.birth_date);
  const user = await prisma.user
    .create({
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(201).send(user);
};
const updateUser = async (req, res) => {
  req.body.birth_date = new Date(req.body.birth_date);
  const user = await prisma.user
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const user = await prisma.user
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(user);
};
module.exports = {
  getAllUser,
  getOneUser,
  crateUser,
  updateUser,
  deleteUser,
};
