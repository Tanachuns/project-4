// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCover = (req, res) => {
  prisma.cover
    .findMany()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "The requested resource was not found.",
        error: e.message,
      });
    });
};

const getOneCover = (req, res) => {
  prisma.cover
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "The requested resource was not found.",
        error: e.message,
      });
    });
};

const crateCover = (req, res) => {
  prisma.cover
    .create({
      data: req.body,
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is created.",
        error: e.message,
      });
    });
};

const updateCover = async (req, res) => {
  prisma.cover
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is updated.",
        error: e.message,
      });
    });
};

const deleteCover = (req, res) => {
  prisma.cover
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is deleted.",
        error: e.message,
      });
    });
};
module.exports = {
  getAllCover,
  getOneCover,
  crateCover,
  updateCover,
  deleteCover,
};
