const manutencaoModel = require('../Models/manutencao.model');

exports.getManutencoes = async (req, res) => {
    try {
        const manutencoes = await manutencaoModel.getManutencoes();
        res.json(manutencoes);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.getManutencaoById = async (req, res) => {
    try {
        const manutencao = await manutencaoModel.getManutencaoById(req.params.id);
        res.json(manutencao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.createManutencao = async (req, res) => {
    try {
        const manutencao = await manutencaoModel.createManutencao(req.body);
        res.json(manutencao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.updateManutencao = async (req, res) => {
    try {
        const manutencao = await manutencaoModel.updateManutencao(req.params.id, req.body);
        res.json(manutencao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.deleteManutencao = async (req, res) => {
    try {
        const manutencao = await manutencaoModel.deleteManutencao(req.params.id);
        res.json(manutencao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}