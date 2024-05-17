const comprovanteModel = require('../Models/comprovante.model');

exports.getComprovantes = async (req, res) => {
    try {
        const comprovantes = await comprovanteModel.getComprovantes();
        res.json(comprovantes);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.getComprovanteById = async (req, res) => {
    try {
        const comprovante = await comprovanteModel.getComprovanteById(req.params.id);
        res.json(comprovante);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.createComprovante = async (req, res) => {
    try {
        const comprovante = await comprovanteModel.createComprovante(req.body);
        res.json(comprovante);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.updateComprovante = async (req, res) => {
    try {
        const comprovante = await comprovanteModel.updateComprovante(req.params.id, req.body);
        res.json(comprovante);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.deleteComprovante = async (req, res) => {
    try {
        const comprovante = await comprovanteModel.deleteComprovante(req.params.id);
        res.json(comprovante);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

