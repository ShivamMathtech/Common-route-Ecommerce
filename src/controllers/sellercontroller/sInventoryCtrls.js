const sInvertoryctrls = (req, res) => {
  res
    .status(200)
    .json({ message: "Seller Inventories controller is working properly" });
};

module.exports = {
  sInvertoryctrls,
};
