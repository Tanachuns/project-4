const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).json({ message: "Unauthentication" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded;
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Invalid Token", error: err.message });
  }
  return next();
};

module.exports = verifyToken;
