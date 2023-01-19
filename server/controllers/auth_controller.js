const bcrypt = require("bcrypt");
const { PrismaClient, Prisma } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const register = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    req.body.birth_date = new Date(req.body.birth_date);
    req.body.password = hash;
    prisma.user
      .create({
        data: req.body,
      })
      .then((data) => {
        let jwtToken = jwt.sign(
          {
            name: data.first_name,
            id: data.id,
            is_admin: data.is_admin,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(201).json({
          ...data,
          token: jwtToken,
          expiresIn: 3600,
        });
      })
      .catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          res.status(500).json({
            message: "Duplicate",
            error: e.message,
            filed: e.meta.target,
          });
        }
      });
  });
};

const login = (req, res) => {
  prisma.user
    .findUnique({
      where: {
        email: req.body.email,
      },
    })
    .then((data) => {
      if (data !== null) {
        return bcrypt
          .compare(req.body.password, data.password)
          .then((result) => {
            if (!result) {
              res.status(401).json({
                message: "Authentication failed",
              });
            } else {
              let jwtToken = jwt.sign(
                {
                  name: data.first_name,
                  id: data.id,
                  is_admin: data.is_admin,
                },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1h",
                }
              );
              res.status(200).json({
                token: jwtToken,
                expiresIn: 3600,
              });
            }
          })
          .catch((error) => {
            res.status(401).json({
              message: "Authentication failed",
              error: error.message,
            });
          });
      } else {
        res.status(401).json({
          message: "Authentication failed",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
};

module.exports = {
  login,
  register,
};
