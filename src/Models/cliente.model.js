const db = require('../Infraestrutura/database');

const getClientes = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM cliente');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de clientes: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de clientes" })
    }
}

const getClienteById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM cliente WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de cliente por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de cliente por id" })
    }
}

const createCliente = async (cliente) => {
    try {
        const { rows } = await db.query('INSERT INTO cliente (nome, email, telefone, cpf, cnh) VALUES ($1, $2, $3, $4, $5) RETURNING *', [cliente.nome
            , cliente.email, cliente.telefone, cliente.cpf, cliente.cnh]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de cliente: ", error)
        res.status(500).json({ message: "Erro durante criação de cliente" })
    }
}

const updateCliente = async (id, cliente) => {
    try {
        const { rows } = await db.query('UPDATE cliente SET nome = $1, email = $2, telefone = $3, cpf = $4, cnh = $5 WHERE id = $6 RETURNING *', [cliente.nome
            , cliente.email, cliente.telefone, cliente.cpf, cliente.cnh, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de cliente: ", error)
        res.status(500).json({ message: "Erro durante atualização de cliente" })
    }
}

const deleteCliente = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM cliente WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de cliente: ", error)
        res.status(500).json({ message: "Erro durante exclusão de cliente" })
    }
}

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
}