module.exports = app => {
  const agendas = require("../controllers/agenda.controller.js");
  var router = require("express").Router();

  router.post("/", agendas.create);

  router.get("/", agendas.findAll);

  router.get("/active", agendas.findAllActive);

  router.get("/:id", agendas.findOne);

  router.put("/:id", agendas.update);

  router.delete("/:id", agendas.delete);

  router.delete("/", agendas.deleteAll);

  app.use('/api', router);
};
