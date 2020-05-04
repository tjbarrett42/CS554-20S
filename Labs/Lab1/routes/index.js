const taskRoutes = require("./api");

const constructorMethod = app => {
  app.use("/api", taskRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
