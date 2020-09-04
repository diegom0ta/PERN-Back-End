module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Esaurla1982",
  DB: "agendadb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
