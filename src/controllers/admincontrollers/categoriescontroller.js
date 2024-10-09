const categories = (req, res) => {
  res
    .status(200)
    .json({ categories: "This is data is comming from the category list" });
};

module.exports = categories;
