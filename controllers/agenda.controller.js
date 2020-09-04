const db = require("../models");
const Agenda = db.agenda;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
//Validate request
  if (!req.body.title){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }
  //Create an Agenda
  const agenda = {
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    active: req.body.active ? req.body.active : false
  };
  //Save agenda in db
  Agenda.create(agenda)
    .then(data => {
      res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred."
      });
    });
};

exports.findAll = (req, res) => {
const title = req.query.title;
var condition = title ? {title: {[Op.iLike]: `%${title}%`}} : null;

Agenda.findAll({where: condition})
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Some error ocurred."
  });
});
};

exports.findOne = (req, res) => {
const id = req.params.id;

Agenda.findByPk(id)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message ||"Error ID" + id
  });
});
};

exports.update = (req, res) => {
const id = req.params.id;

Agenda.update(req.body, {
  where: {id: id}
})
.then(num => {
  if (num == 1){
    res.send({
      messagem: "Successfully updated."
    });
  } else {
    res.send({
      message: `Error updating id=${id}. Not found or empty.`
    });
  }
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Error updating id" + id
  });
});
};

exports.delete = (req, res) => {
const id = req.params.id;

Agenda.destroy({
  where: {id: id}
})
.then(num => {
  if (num == 1){
    res.send({
      message: "Successfully deleted!"
    });
  } else {
    res.send({
      message: "Error deleting. Not found."
    });
  }
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Error updating."
  });
});
};

exports.deleteAll = (req, res) => {
Agenda.destroy({
  where: {},
  truncate: false
})
.then(nums => {
  res.send({message: `${nums} Activities were deleted successfully!`})
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Some error ocurred."
  });
});
};

exports.findAllActive = (req, res) => {
Agenda.findAll({where: {active: true}})
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
    err.message || "Some error ocurred."
  });
});
};
