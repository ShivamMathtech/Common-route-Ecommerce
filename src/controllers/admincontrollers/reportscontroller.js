const reports = (req, res) => {
  res.status(200).json({
    message: "reports data is comming from the Amdin sever",
  });
};

module.exports = {
  reports,
};
