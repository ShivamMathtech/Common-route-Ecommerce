const anayltics = (req, res) => {
  res.status(200).json({
    message: "All the infromation of anayltics are shown in the page",
  });
};

module.exports = anayltics;
