const express = require("express");
const adminRoutes = require("./Routes/AdminRoute/adminRoute");
const customerRoute = require("./Routes/Customer/customerRoute");

const deleveryRoute = require("./Routes/Delevery/deleverRoute");
const marketingRoute = require("./Routes/Marketing/MarketingRoute");
const app = express();
require("dotenv").config();
app.use("/admin", adminRoutes);
app.use("/customers", customerRoute);
app.use("/delevery", deleveryRoute);
app.use("/markting", marketingRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running at ${Port}`);
});
