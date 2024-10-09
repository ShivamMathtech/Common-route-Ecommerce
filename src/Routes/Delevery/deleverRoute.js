const express = require("express");
const dashboardcontroller = require("../../controllers/delevercontroller/dashboardcontroller,js");
const ordercontroller = require("../../controllers/delevercontroller/ordercontroller");
const historycontroller = require("../../controllers/delevercontroller/hsitorycontroller");
const delProfileController = require("../../controllers/delevercontroller/delprofilecontrl");
const deleveryRoute = express.Router();

deleveryRoute.get("/dashboard", dashboardcontroller);
deleveryRoute.get("/orders", ordercontroller);
deleveryRoute.get("/history", historycontroller);
deleveryRoute.get("/profile", delProfileController);

module.exports = deleveryRoute;
