const jwt = require("json-web-token");
require("dotenv").config;

const CreateToken = (id) => {
  return jwt.sign(id, process.env.SECRET, {
    expiresIn: "24h",
  });
};

module.export = CreateToken;
