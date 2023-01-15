// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCover = async (req, res) => {
  const cover = await prisma.cover.findMany().catch((e) => {
    res.status(500).send(e.message);
  });
  res.status(200).json(cover);
};

const getOneCover = async (req, res) => {
  const cover = await prisma.cover
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).json(cover);
};

const crateCover = async (req, res) => {
  const cover = await prisma.cover
    .create({
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(201).send(cover);
};
const updateCover = async (req, res) => {
  const cover = await prisma.cover
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(cover);
};

const deleteCover = async (req, res) => {
  const cover = await prisma.cover
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(cover);
};
module.exports = {
  getAllCover,
  getOneCover,
  crateCover,
  updateCover,
  deleteCover,
};
