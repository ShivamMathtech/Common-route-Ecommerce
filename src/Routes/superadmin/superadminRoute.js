const express = require("express");
const supDashboardCtrls = require("../../controllers/superAdminctrls/superDashboardctrls");
const supAdminctrls = require("../../controllers/superAdminctrls/supAdminctrls");
const supSettingsctrls = require("../../controllers/superAdminctrls/supSettingctrls");
const supLogsCtrls = require("../../controllers/superAdminctrls/supLogsctrls");
const supReportsCtrls = require("../../controllers/superAdminctrls/supReportsctrls");
const superAdminRouter = express.Router();

superAdminRouter.get("/dashboard", supDashboardCtrls);
superAdminRouter.get("/admin", supAdminctrls);
superAdminRouter.get("/settings", supSettingsctrls);
superAdminRouter.get("/logs", supLogsCtrls);
superAdminRouter.get("/reports", supReportsCtrls);

module.exports = superAdminRouter;
