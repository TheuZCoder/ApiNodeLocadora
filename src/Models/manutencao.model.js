const db = require('../Infraestrutura/database');

const getManutencoes = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM manutencao');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de manutenções: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de manutenções" })
    }
}

const getManutencaoById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM manutencao WHERE id_manutencao = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de manutenção por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de manutenção por id" })
    }
}

const createManutencao = async (manutencao) => {
    try {
        const { rows } = await db.query(
          "INSERT INTO manutencao (id_carro, data_manutencao, tipo_manutencao, custo, descricao) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [
            manutencao.id_carro,
            manutencao.data_manutencao,
            manutencao.tipo_manutencao,
            manutencao.custo,
            manutencao.descricao,
          ]
        );
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de manutenção: ", error)
        res.status(500).json({ message: "Erro durante criação de manutenção" })
    }
}

const updateManutencao = async (id, manutencao) => {
    try {
        const { rows } = await db.query(
          "UPDATE manutencao SET id_carro = $1, data_manutencao = $2, tipo_manutencao = $3, custo = $4, descricao = $5 WHERE id_manutencao = $6 RETURNING *",
          [
            manutencao.id_carro,
            manutencao.data_manutencao,
            manutencao.tipo_manutencao,
            manutencao.custo,
            manutencao.descricao,
            manutencao.id_manutencao
          ]
        );
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de manutenção: ", error)
        res.status(500).json({ message: "Erro durante atualização de manutenção" })
    }
}

const deleteManutencao = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM manutencao WHERE id_manutencao = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de manutenção: ", error)
        res.status(500).json({ message: "Erro durante exclusão de manutenção" })
    }
}

module.exports = {
    getManutencoes,
    getManutencaoById,
    createManutencao,
    updateManutencao,
    deleteManutencao
}