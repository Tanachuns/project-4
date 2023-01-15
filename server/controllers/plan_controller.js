// const jwt = require("jsonwebtoken");
// const jwt_decode = require("jwt-decode");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPlan = async (req, res) => {
  const plan = await prisma.plan.findMany().catch((e) => {
    res.status(500).send(e.message);
  });
  res.status(200).json(plan);
};

const getOnePlan = async (req, res) => {
  const plan = await prisma.plan
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        cover: true,
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });

  res.status(200).json(plan);
};

const cratePlan = async (req, res) => {
  const plan = await prisma.plan
    .create({
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(201).send(plan);
};
const updatePlan = async (req, res) => {
  const plan = await prisma.plan
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(plan);
};

const deletePlan = async (req, res) => {
  const plan = await prisma.plan
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
  res.status(200).send(plan);
};
module.exports = {
  getAllPlan,
  getOnePlan,
  cratePlan,
  updatePlan,
  deletePlan,
};
