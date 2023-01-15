// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllInsurance = async (req, res) => {
  const insurance = await prisma.insurance.findMany().catch((e) => {
    res.status(500).send(e.message);
  });
  res.status(200).json(insurance);
};

const getOneInsurance = async (req, res) => {
  const insurance = await prisma.insurance
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).json(insurance);
};

const crateInsurance = async (req, res) => {
  req.body.deperture_date = new Date(req.body.deperture_date);
  req.body.return_date = new Date(req.body.return_date);
  const insurance = await prisma.insurance
    .create({
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(201).send(insurance);
};
const updateInsurance = async (req, res) => {
  req.body.deperture_date = new Date(req.body.deperture_date);
  req.body.return_date = new Date(req.body.return_date);
  const insurance = await prisma.insurance
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(insurance);
};

const deleteInsurance = async (req, res) => {
  const insurance = await prisma.insurance
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(insurance);
};
module.exports = {
  getAllInsurance,
  getOneInsurance,
  crateInsurance,
  updateInsurance,
  deleteInsurance,
};
