const express = require("express");
const sdashbordctrl = require("../../controllers/sellercontroller/dashboardctrl");
const {
  sProductsctrls,
} = require("../../controllers/sellercontroller/sproductsctrl");
const sOrdersctrl = require("../../controllers/sellercontroller/sOrdertrl");
const {
  sInvertoryctrls,
} = require("../../controllers/sellercontroller/sInventoryCtrls");
const sReportsctrls = require("../../controllers/sellercontroller/sReportsctrls");
const {
  sReviewsctrls,
} = require("../../controllers/sellercontroller/sReviewsctrls");
const sProfilectrls = require("../../controllers/sellercontroller/sProfilectrls");
const {
  sSettingsctrls,
} = require("../../controllers/sellercontroller/sSettingsctrls");
const sellerRouter = express.Router();
sellerRouter.get("/dashboard", sdashbordctrl);
sellerRouter.get("/products", sProductsctrls);
sellerRouter.get("/order", sOrdersctrl);
sellerRouter.get("/inventory", sInvertoryctrls);
sellerRouter.get("/reports", sReportsctrls);
sellerRouter.get("/reviews", sReviewsctrls);
sellerRouter.get("/profile", sProfilectrls);
sellerRouter.get("/settings", sSettingsctrls);

module.exports = { sellerRouter: sellerRouter };
