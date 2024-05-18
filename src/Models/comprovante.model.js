const db = require("../Infraestrutura/database");

const getComprovantes = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM comprovante");
    return rows;
  } catch (error) {
    console.log("Erro durante pesquisa de comprovantes: ", error);
    res.status(500).json({ message: "Erro durante pesquisa de comprovantes" });
  }
};

const getComprovanteById = async (id) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM comprovante WHERE id_comprovante = $1",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante pesquisa de comprovante por id: ", error);
    res
      .status(500)
      .json({ message: "Erro durante pesquisa de comprovante por id" });
  }
};

const createComprovante = async (comprovante) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO comprovante (id_locacao, id_cliente, id_funcionario, data_pagamento, valor_pagamento, forma_pagamento, status_pagamento) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        comprovante.id_locacao,
        comprovante.id_cliente,
        comprovante.id_funcionario,
        comprovante.data_pagamento,
        comprovante.valor_pagamento,
        comprovante.forma_pagamento,
        comprovante.status_pagamento,
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante criação de comprovante: ", error);
    res.status(500).json({ message: "Erro durante criação de comprovante" });
  }
};

const updateComprovante = async (id, comprovante) => {
  try {
    const { rows } = await db.query(
      "UPDATE comprovante SET id_locacao = $1, id_cliente = $2, id_funcionario = $3, data_pagamento = $4, valor_pagamento = $5, forma_pagamento = $6, status_pagamento = $7 WHERE id_comprovante = $8 RETURNING *",
      [
        comprovante.id_locacao,
        comprovante.id_cliente,
        comprovante.id_funcionario,
        comprovante.data_pagamento,
        comprovante.valor_pagamento,
        comprovante.forma_pagamento,
        comprovante.status_pagamento,
        comprovante.id_comprovante
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante atualização de comprovante: ", error);
    res
      .status(500)
      .json({ message: "Erro durante atualização de comprovante" });
  }
};

const deleteComprovante = async (id) => {
  try {
    const { rows } = await db.query(
      "DELETE FROM comprovante WHERE id_comprovante = $1 RETURNING *",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante exclusão de comprovante: ", error);
    res.status(500).json({ message: "Erro durante exclusão de comprovante" });
  }
};

module.exports = {
  getComprovantes,
  getComprovanteById,
  createComprovante,
  updateComprovante,
  deleteComprovante,
};
