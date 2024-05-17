const funcionarioModel = require('../Models/funcionario.model');

exports.getFuncionarios = async (req, res) => {
    try {
        const funcionarios = await funcionarioModel.getFuncionarios();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.getFuncionarioById = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.getFuncionarioById(req.params.id);
        res.json(funcionario);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.createFuncionario = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.createFuncionario(req.body);
        res.json(funcionario);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.updateFuncionario = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.updateFuncionario(req.params.id, req.body);
        res.json(funcionario);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.deleteFuncionario = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.deleteFuncionario(req.params.id);
        res.json(funcionario);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}