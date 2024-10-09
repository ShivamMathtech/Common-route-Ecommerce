const coupons = (req, res) => {
  res.status(200).json({
    message: "Coupons data are comming from the Admin Pannel",
  });
};
module.exports = coupons;
