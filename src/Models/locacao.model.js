const db = require("../Infraestrutura/database");

const getLocacoes = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM locacao");
    return rows;
  } catch (error) {
    console.log("Erro durante pesquisa de locações: ", error);
    res.status(500).json({ message: "Erro durante pesquisa de locações" });
  }
};

const getLocacaoById = async (id) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM locacao WHERE id_locacao = $1",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante pesquisa de locação por id: ", error);
    res
      .status(500)
      .json({ message: "Erro durante pesquisa de locação por id" });
  }
};

const createLocacao = async (locacao) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO locacao (data_locacao, valor_total, data_devolucao, id_cliente, id_funcionario, id_carro) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        locacao.data_locacao,
        locacao.valor_total,
        locacao.data_devolucao,
        locacao.id_cliente,
        locacao.id_funcionario,
        locacao.id_carro,
      ]
    );

    await updateCarroDisponibilidade(locacao.id_carro, false);

    return rows[0];
  } catch (error) {
    console.log("Erro durante criação de locação: ", error);
    res.status(500).json({ message: "Erro durante criação de locação" });
  }
};

const updateLocacao = async (id, locacao) => {
  try {
    const { rows } = await db.query(
      "UPDATE locacao SET data_locacao = $1, valor_total = $2, data_devolucao = $3, id_cliente = $4, id_funcionario = $5, id_carro = $6 WHERE id_locacao = $7 RETURNING *",
      [
        locacao.data_locacao,
        locacao.valor_total,
        locacao.data_devolucao,
        locacao.id_cliente,
        locacao.id_funcionario,
        locacao.id_carro,
        locacao.id_locacao,
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante atualização de locação: ", error);
    res.status(500).json({ message: "Erro durante atualização de locação" });
  }
};

const deleteLocacao = async (id) => {
  try {
    const { rows } = await db.query(
      "DELETE FROM locacao WHERE id_locacao = $1 RETURNING *",
      [id]
    );

    return rows[0];
  } catch (error) {
    console.log("Erro durante exclusão de locação: ", error);
    res.status(500).json({ message: "Erro durante exclusão de locação" });
  }
};

const updateCarroDisponibilidade = async (id_carro, disponibilidade) => {
  try {
    await db.query(
      "UPDATE carro SET disponibilidade_carro = $1 WHERE id_carro = $2",
      [disponibilidade, id_carro]
    );
  } catch (error) {
    console.log(
      "Erro durante atualização de disponibilidade do carro: ",
      error
    );
    throw error;
  }
};

const calcularReceitaTotal = async (dataInicio, dataFim) => {
  try {
    const query = `
      SELECT SUM(valor_total) AS receita_total
      FROM locacao
      WHERE data_locacao BETWEEN $1 AND $2
    `;
    const { rows } = await db.query(query, [dataInicio, dataFim]);
    return rows[0].receita_total || 0; // Retorna 0 se não houver resultados
  } catch (error) {
    console.log("Erro durante cálculo da receita total: ", error);
    throw error; // Lança o erro para ser tratado no controller
  }
};

module.exports = {
  getLocacoes,
  getLocacaoById,
  createLocacao,
  updateLocacao,
  deleteLocacao,
  updateCarroDisponibilidade,
  calcularReceitaTotal
};
