const customers = (req, res) => {
  res.status(200).json({
    message: "Customer data is comming from Admin Panel",
  });
};
module.exports = customers;
