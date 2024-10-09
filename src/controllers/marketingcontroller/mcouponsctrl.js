const mcouponController = (req, res) => {
  res.status(200).json({
    message: "Coupon controller is working fine",
  });
};

module.exports = {
  mcouponController,
};
