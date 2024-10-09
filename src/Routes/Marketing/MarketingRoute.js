const express = require("express");
const mDashboardController = require("../../controllers/marketingcontroller/dashboardctrl");
const {
  mcouponController,
} = require("../../controllers/marketingcontroller/mcouponsctrl");
const mCampaignCtrl = require("../../controllers/marketingcontroller/mcampaignctrl");
const mreportsCtrl = require("../../controllers/marketingcontroller/mreportsctrls");
const mCustomerCtrls = require("../../controllers/marketingcontroller/mCustonmerCtrls");
const marketingRoute = express.Router();
marketingRoute.get("/dashboard", mDashboardController);
marketingRoute.get("/coupons", mcouponController);
marketingRoute.get("/campaign", mCampaignCtrl);
marketingRoute.get("/reports", mreportsCtrl);
marketingRoute.get("/customers", mCustomerCtrls);

module.exports = marketingRoute;
