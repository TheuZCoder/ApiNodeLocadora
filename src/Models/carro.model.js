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
        const { rows } = await db.query('SELECT * FROM carro WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de carro por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de carro por id" })
    }
}

const createCarro = async (carro) => {
    try {
        const { rows } = await db.query('INSERT INTO carro (modelo, marca, ano, cor, placa, valor_diaria) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [carro.modelo
            , carro.marca, carro.ano, carro.cor, carro.placa, carro.valor_diaria]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de carro: ", error)
        res.status(500).json({ message: "Erro durante criação de carro" })
    }
}

const updateCarro = async (id, carro) => {
    try {
        const { rows } = await db.query('UPDATE carro SET modelo = $1, marca = $2, ano = $3, cor = $4, placa = $5, valor_diaria = $6 WHERE id = $7 RETURNING *', [carro.modelo
            , carro.marca, carro.ano, carro.cor, carro.placa, carro.valor_diaria, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de carro: ", error)
        res.status(500).json({ message: "Erro durante atualização de carro" })
    }
}

const deleteCarro = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM carro WHERE id = $1 RETURNING *', [id]);
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