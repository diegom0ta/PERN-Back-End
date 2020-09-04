module.exports = (sequelize, Sequelize) => {
  const Agenda = sequelize.define("agenda", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    active: {
      type: Sequelize.BOOLEAN
    }
  });
  return Agenda;
}
