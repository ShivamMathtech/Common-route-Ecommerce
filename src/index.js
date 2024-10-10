const express = require("express");
const adminRoutes = require("./Routes/AdminRoute/adminRoute");
const customerRoute = require("./Routes/Customer/customerRoute");

const deleveryRoute = require("./Routes/Delevery/deleverRoute");
const marketingRoute = require("./Routes/Marketing/MarketingRoute");
const { sellerRouter } = require("./Routes/Seller/sellerRoute");
const superAdminRouter = require("./Routes/superadmin/superadminRoute");
const supportAgentRoute = require("./Routes/support/supportRoute");

const app = express();
require("dotenv").config();
app.use("/admin", adminRoutes);
app.use("/customers", customerRoute);
app.use("/delevery", deleveryRoute);
app.use("/markting", marketingRoute);
app.use("/seller", sellerRouter);
app.use("/superAdmin", superAdminRouter);
app.use("/supportAgent", supportAgentRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running at ${Port}`);
});
