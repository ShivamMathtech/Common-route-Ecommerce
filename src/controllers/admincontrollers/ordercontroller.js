const order = (req, res) => {
  res.status(200).json({
    message: "Order data is comming from the order controller",
  });
};

module.exports = {
  order,
};
