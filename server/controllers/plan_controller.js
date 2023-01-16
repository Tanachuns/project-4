const getAllPlan = (req, res) => {
  prisma.plan
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

const getOnePlan = async (req, res) => {
  prisma.plan
    .findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        cover: true,
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

const cratePlan = (req, res) => {
  prisma.plan
    .create({
      data: req.body,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is created.",
        error: e.message,
      });
    });
};

const updatePlan = (req, res) => {
  prisma.plan
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: req.body,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is updated.",
        error: e.message,
      });
    });
};

const deletePlan = (req, res) => {
  prisma.plan
    .delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(500).json({
        message: "No resource is deleted.",
        error: e.message,
      });
    });
};
module.exports = {
  getAllPlan,
  getOnePlan,
  cratePlan,
  updatePlan,
  deletePlan,
};
