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
        const { rows } = await db.query('SELECT * FROM manutencao WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de manutenção por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de manutenção por id" })
    }
}

const createManutencao = async (manutencao) => {
    try {
        const { rows } = await db.query('INSERT INTO manutencao (descricao, data_manutencao, id_veiculo) VALUES ($1, $2, $3) RETURNING *', [manutencao.descricao
            , manutencao.data_manutencao, manutencao.id_veiculo]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de manutenção: ", error)
        res.status(500).json({ message: "Erro durante criação de manutenção" })
    }
}

const updateManutencao = async (id, manutencao) => {
    try {
        const { rows } = await db.query('UPDATE manutencao SET descricao = $1, data_manutencao = $2, id_veiculo = $3 WHERE id = $4 RETURNING *', [manutencao.descricao
            , manutencao.data_manutencao, manutencao.id_veiculo, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de manutenção: ", error)
        res.status(500).json({ message: "Erro durante atualização de manutenção" })
    }
}

const deleteManutencao = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM manutencao WHERE id = $1 RETURNING *', [id]);
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