const db = require('../Infraestrutura/database');

const getFuncionarios = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM funcionario');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de funcionários: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de funcionários" })
    }
}

const getFuncionarioById = async (id) => {  
    try {
        const { rows } = await db.query('SELECT * FROM funcionario WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de funcionário por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de funcionário por id" })
    }
}   

const createFuncionario = async (funcionario) => {
    try {
        const { rows } = await db.query('INSERT INTO funcionario (nome, cpf, data_nascimento, salario, cargo) VALUES ($1, $2, $3, $4, $5) RETURNING *', [funcionario.nome
            , funcionario.cpf, funcionario.data_nascimento, funcionario.salario, funcionario.cargo]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de funcionário: ", error)
        res.status(500).json({ message: "Erro durante criação de funcionário" })
    }
}

const updateFuncionario = async (id, funcionario) => {
    try {
        const { rows } = await db.query('UPDATE funcionario SET nome = $1, cpf = $2, data_nascimento = $3, salario = $4, cargo = $5 WHERE id = $6 RETURNING *', [funcionario.nome
            , funcionario.cpf, funcionario.data_nascimento, funcionario.salario, funcionario.cargo, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de funcionário: ", error)
        res.status(500).json({ message: "Erro durante atualização de funcionário" })
    }
}

const deleteFuncionario = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM funcionario WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de funcionário: ", error)
        res.status(500).json({ message: "Erro durante exclusão de funcionário" })
    }
}

module.exports = {
    getFuncionarios,
    getFuncionarioById,
    createFuncionario,
    updateFuncionario,
    deleteFuncionario
}