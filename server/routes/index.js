const ISPDataRoute = require("./ISPRoute");

const setupRoutes = (app) => {
    app.use("/", ISPDataRoute);
  };
  
  module.exports = setupRoutes;
