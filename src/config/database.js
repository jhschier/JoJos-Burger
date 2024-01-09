module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "jhschier",
  database: "jojosburger",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTimeTable: true,
  },
};
