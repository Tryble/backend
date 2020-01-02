module.exports = (err, req, res, next) => {
  if (err) {
    return res.status(err.status || 400).json({ error: err.message });
  } else {
    next();
  }
};
