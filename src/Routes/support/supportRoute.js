const express = require("express");
const sprtDasboardCtrls = require("../../controllers/supportAgentctrls/sprtDashboardCtrls");
const sprtTicketCtrl = require("../../controllers/supportAgentctrls/sprtTicketCtrls");
const sprtChatCtrl = require("../../controllers/supportAgentctrls/sprtChatCtrls");
const sprtOrderCtrl = require("../../controllers/supportAgentctrls/sprtOrderCtrl");
const sprtKnwldgeCtrl = require("../../controllers/supportAgentctrls/sprtKnwldgeCtrls");
const sprtProflieCtrl = require("../../controllers/supportAgentctrls/sprtProfileCtrls");
const supportAgentRoute = express.Router();

supportAgentRoute.get("/dashboard", sprtDasboardCtrls);
supportAgentRoute.get("/tickets", sprtTicketCtrl);
supportAgentRoute.get("/chat", sprtChatCtrl);
supportAgentRoute.get("/orders", sprtOrderCtrl);
supportAgentRoute.get("/Knowledege", sprtKnwldgeCtrl);
supportAgentRoute.get("/profile", sprtProflieCtrl);
module.exports = supportAgentRoute;
