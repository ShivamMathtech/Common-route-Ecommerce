const mreportsCtrl = (req, res) => {
  res.status(200).json({
    message: "Welcome to the mReports API!",
  });
};
module.exports = mreportsCtrl;
