const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllInsurance = (req, res) => {
  prisma.insurance
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

const getOneInsurance = (req, res) => {
  prisma.insurance
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        user: true,
        plan: true,
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

const crateInsurance = async (req, res) => {
  req.body.departure_date = new Date(req.body.departure_date);
  req.body.return_date = new Date(req.body.return_date);
  req.body.payment_status = false;

  prisma.insurance
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
const updateInsurance = (req, res) => {
  req.body.departure_date = new Date(req.body.departure_date);
  req.body.return_date = new Date(req.body.return_date);
  prisma.insurance
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
        message: "No resource is update.",
        error: e.message,
      });
    });
};

const deleteInsurance = (req, res) => {
  prisma.insurance
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
  getAllInsurance,
  getOneInsurance,
  crateInsurance,
  updateInsurance,
  deleteInsurance,
};
