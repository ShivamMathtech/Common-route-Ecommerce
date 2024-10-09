const dashboard = (req, res) => {
  res.status(200).json({
    message: "Data Aer comming from the Admin Controller",
  });
};

module.exports = {
  dashboard,
};
