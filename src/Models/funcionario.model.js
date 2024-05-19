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
        const { rows } = await db.query('SELECT * FROM funcionario WHERE id_funcionario = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de funcionário por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de funcionário por id" })
    }
}   

const createFuncionario = async (funcionario) => {
    try {
        const { rows } = await db.query(
          "INSERT INTO funcionario (nome_funcionario, email_funcionario, senha_funcionario, cargo_funcionario, salario_funcionario, data_contratacao_funcionario) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            funcionario.nome_funcionario,
            funcionario.email_funcionario,
            funcionario.senha_funcionario,
            funcionario.cargo_funcionario,
            funcionario.salario_funcionario,
            funcionario.data_contratacao_funcionario
          ]
        );
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de funcionário: ", error)
        res.status(500).json({ message: "Erro durante criação de funcionário" })
    }
}

const updateFuncionario = async (id, funcionario) => {
    try {
        const { rows } = await db.query(
          "UPDATE funcionario SET nome_funcionario = $1, email_funcionario = $2, senha_funcionario = $3, cargo_funcionario = $4, salario_funcionario = $5, data_contratacao_funcionario = $6  WHERE id_funcionario = $7 RETURNING *",
          [
            funcionario.nome_funcionario,
            funcionario.email_funcionario,
            funcionario.senha_funcionario,
            funcionario.cargo_funcionario,
            funcionario.salario_funcionario,
            funcionario.data_contratacao_funcionario,
            funcionario.id_funcionario,
          ]
        );
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de funcionário: ", error)
        res.status(500).json({ message: "Erro durante atualização de funcionário" })
    }
}

const deleteFuncionario = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM funcionario WHERE id_funcionario = $1 RETURNING *', [id]);
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