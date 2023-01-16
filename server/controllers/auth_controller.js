const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
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

const login = (req, res) => {
  prisma.user
    .findUnique({
      where: {
        email: req.body.email,
      },
    })
    .then((data) => {
      console.log(data);
      if (data !== null) {
        return bcrypt
          .compare(req.body.password, data.password)
          .then((result) => {
            console.log(result);
            if (!result) {
              res.status(401).json({
                message: "Authentication failed",
              });
            } else {
              let jwtToken = jwt.sign(
                {
                  name: data.last_name,
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
