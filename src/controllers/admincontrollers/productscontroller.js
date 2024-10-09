const products = (req, res) => {
  res
    .status(200)
    .json({ produts: "This data is comming from the products controller" });
};

module.exports = { products };
