module.exports = (req, res, next) => {
  res.header("Content-Range", "tickets 0-20/20");
  next();
};
