const db = require('../Infraestrutura/database');

const getComprovantes = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM comprovante');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de comprovantes: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de comprovantes" })
    }
}

const getComprovanteById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM comprovante WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de comprovante por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de comprovante por id" })
    }
}

const createComprovante = async (comprovante) => {
    try {
        const { rows } = await db.query('INSERT INTO comprovante (data_pagamento, valor, id_locacao) VALUES ($1, $2, $3) RETURNING *', [comprovante.data_pagamento
            , comprovante.valor, comprovante.id_locacao]);
            return rows[0];
    } catch (error) {
        console.log("Erro durante criação de comprovante: ", error)
        res.status(500).json({ message: "Erro durante criação de comprovante" })
    }
}

const updateComprovante = async (id, comprovante) => {
    try {
        const { rows } = await db.query('UPDATE comprovante SET data_pagamento = $1, valor = $2, id_locacao = $3 WHERE id = $4 RETURNING *', [comprovante.data_pagamento
            , comprovante.valor, comprovante.id_locacao, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de comprovante: ", error)
        res.status(500).json({ message: "Erro durante atualização de comprovante" })
    }
}

const deleteComprovante = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM comprovante WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de comprovante: ", error)
        res.status(500).json({ message: "Erro durante exclusão de comprovante" })
    }
}

module.exports = {
    getComprovantes,
    getComprovanteById,
    createComprovante,
    updateComprovante,
    deleteComprovante
}