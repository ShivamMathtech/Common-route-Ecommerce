const sprtDasboardCtrls = (req, res) => {
  res
    .status(200)
    .json({ message: "Dashboard controller loaded successfully!" });
};

module.exports = sprtDasboardCtrls;
