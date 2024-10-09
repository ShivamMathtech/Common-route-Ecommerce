const mCustomerCtrls = (req, res) => {
  res.status(200).json({
    message: "Customer controller loaded successfully!",
  });
};
module.exports = mCustomerCtrls;
