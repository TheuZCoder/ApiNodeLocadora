const db = require('../Infraestrutura/database');

const getLocacoes = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM locacao');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de locações: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de locações" })
    }
}

const getLocacaoById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM locacao WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de locação por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de locação por id" })
    }
}

const createLocacao = async (locacao) => {
    try {
        const { rows } = await db.query('INSERT INTO locacao (data_inicio, data_fim, valor_diaria, id_cliente, id_veiculo) VALUES ($1, $2, $3, $4, $5) RETURNING *', [locacao.data_inicio
            , locacao.data_fim, locacao.valor_diaria, locacao.id_cliente, locacao.id_veiculo]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de locação: ", error)
        res.status(500).json({ message: "Erro durante criação de locação" })
    }
}

const updateLocacao = async (id, locacao) => {
    try {
        const { rows } = await db.query('UPDATE locacao SET data_inicio = $1, data_fim = $2, valor_diaria = $3, id_cliente = $4, id_veiculo = $5 WHERE id = $6 RETURNING *', [locacao.data_inicio
            , locacao.data_fim, locacao.valor_diaria, locacao.id_cliente, locacao.id_veiculo, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de locação: ", error)
        res.status(500).json({ message: "Erro durante atualização de locação" })
    }
}

const deleteLocacao = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM locacao WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de locação: ", error)
        res.status(500).json({ message: "Erro durante exclusão de locação" })
    }
}

module.exports = {
    getLocacoes,
    getLocacaoById,
    createLocacao,
    updateLocacao,
    deleteLocacao
}