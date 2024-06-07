const carroModel = require('../Models/carro.model');

exports.getCarros = async (req, res) => {
    try {
        const carro = await carroModel.getCarros();
        res.json(carro);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.getCarroById = async (req, res) => {
    try {
        const carro = await carroModel.getCarroById(req.params.id);
        res.json(carro);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.createCarro = async (req, res) => {
    try {
        const carro = await carroModel.createCarro(req.body.placa_carro, req.body.modelo_carro, req.body.marca_carro, req.body.ano_carro, req.body.cor_carro, req.body.disponibilidade_carro, req.body.valor_carro);
        res.json(carro);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.updateCarro = async (req, res) => {
    try {
        const carro = await carroModel.updateCarro(req.params.id, req.body.placa_carro, req.body.modelo_carro, req.body.marca_carro, req.body.ano_carro, req.body.cor_carro, req.body.disponibilidade_carro, req.body.valor_carro,);
        res.json(carro);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.deleteCarro = async (req, res) => {
    try {
        const carro = await carroModel.deleteCarro(req.params.id);
        res.json(carro);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.updateDisponibilidade = async (req, res) => {
    try {
        const carro = await carroModel.updateDisponibilidade(req.params.id, req.body.disponibilidade_carro);
        res.json(carro);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}