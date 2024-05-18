const db = require('../Infraestrutura/database');
//arrumar models de todos
const getCarros = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM carro');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de carros: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de carros" })
    }
}

const getCarroById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM carro WHERE id_carro = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de carro por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de carro por id" })
    }
}

const createCarro = async (
  placa_carro,
  modelo_carro,
  marca_carro,
  ano_carro,
  cor_carro,
  disponibilidade_carro,
  valor_carro
) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO carro (placa_carro, modelo_carro, marca_carro, ano_carro, cor_carro, disponibilidade_carro,valor_carro) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        placa_carro,
        modelo_carro,
        marca_carro,
        ano_carro,
        cor_carro,
        disponibilidade_carro,
        valor_carro,
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante criação de carro: ", error);
    res.status(500).json({ message: "Erro durante criação de carro" });
  }
};

const updateCarro = async (
  id_carro,
  placa_carro,
  modelo_carro,
  marca_carro,
  ano_carro,
  cor_carro,
  disponibilidade_carro,
  valor_carro
) => {
  try {
    const { rows } = await db.query(
      "UPDATE carro SET placa_carro = $1, modelo_carro = $2, marca_carro = $3, ano_carro = $4, cor_carro = $5, disponibilidade_carro = $6, valor_carro= $7 WHERE id_carro = $8 RETURNING *",
      [placa_carro, modelo_carro, marca_carro, ano_carro, cor_carro, disponibilidade_carro, valor_carro,id_carro]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante atualização de carro: ", error);
    res.status(500).json({ message: "Erro durante atualização de carro" });
  }
};

const deleteCarro = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM carro WHERE id_carro = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de carro: ", error)
        res.status(500).json({ message: "Erro durante exclusão de carro" })
    }
}

module.exports = {
    getCarros,
    getCarroById,
    createCarro,
    updateCarro,
    deleteCarro
}