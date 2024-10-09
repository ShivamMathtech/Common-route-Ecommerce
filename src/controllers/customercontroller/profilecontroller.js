const profilecontroller = (req, res) => {
  // All the home routes logic is responsible for routing  routes
  res.status(200).json({
    message: "All the Profile routes logic is responsible for routing routes",
  });
};

module.exports = profilecontroller;
