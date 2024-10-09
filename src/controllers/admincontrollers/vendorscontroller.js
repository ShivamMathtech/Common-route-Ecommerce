const vendors = (req, res) => {
  res.status(200).json({
    message: "Venders data is comming from the admin server",
  });
};

module.exports = vendors;
