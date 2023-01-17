const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getAllUser = (req, res) => {
  prisma.user
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

const getOneUser = (req, res) => {
  prisma.user
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

const createUser = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    req.body.birth_date = new Date(req.body.birth_date);
    req.body.password = hash;
    prisma.user
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
  });
};
const updateUser = (req, res) => {
  req.body.birth_date = new Date(req.body.birth_date);
  prisma.user
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
        message: "No resource is edited.",
        error: e.message,
      });
    });
};

const deleteUser = (req, res) => {
  prisma.user
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
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
