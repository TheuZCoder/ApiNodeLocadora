const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "locadora",
  password: "postgres",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Erro ao conectar ao banco de dados:", err.message);
  }
  console.log("Conexão bem-sucedida com o banco de dados");
  client.release();
});
