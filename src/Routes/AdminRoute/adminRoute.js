const express = require("express");
const {
  dashboard,
} = require("../../controllers/admincontrollers/dashboardcontroller");
const {
  products,
} = require("../../controllers/admincontrollers/productscontroller");
const categories = require("../../controllers/admincontrollers/categoriescontroller");
const { order } = require("../../controllers/admincontrollers/ordercontroller");
const customers = require("../../controllers/admincontrollers/customerscontroller");
const vendors = require("../../controllers/admincontrollers/vendorscontroller");
const {
  reports,
} = require("../../controllers/admincontrollers/reportscontroller");
const settings = require("../../controllers/admincontrollers/settingscontroller");
const coupons = require("../../controllers/admincontrollers/couponscontroller");
const reviews = require("../../controllers/admincontrollers/reviewsconstoroller");
const anayltics = require("../../controllers/admincontrollers/anaylticscontrollers");
const adminRoutes = express.Router();
adminRoutes.get("/dashboard", dashboard);
adminRoutes.get("/products", products);
adminRoutes.get("/categories", categories);
adminRoutes.get("/orders", order);
adminRoutes.get("/customers", customers);
adminRoutes.get("/vendors", vendors);
adminRoutes.get("/reports", reports);
adminRoutes.get("/settings", settings);
adminRoutes.get("/coupons", coupons);
adminRoutes.get("/reviews", reviews);
adminRoutes.get("/anayltics", anayltics);

module.exports = adminRoutes;
