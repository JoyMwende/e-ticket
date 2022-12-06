const jwt = require("json-web-token");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    red.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Token required for authentication!");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
