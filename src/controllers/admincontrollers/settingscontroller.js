const settings = (req, res) => {
  res.status(200).json({
    message: "All Settings data is comming from the Admin Server",
  });
};
module.exports = settings;
