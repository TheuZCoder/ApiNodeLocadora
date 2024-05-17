const clienteModel = require('../Models/cliente.model');

exports.getClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.getClientes();
        res.json(clientes);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await clienteModel.getClienteById(req.params.id);
        res.json(cliente);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.createCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.createCliente(req.body);
        res.json(cliente);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.updateCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.updateCliente(req.params.id, req.body);
        res.json(cliente);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.deleteCliente(req.params.id);
        res.json(cliente);
    } catch (error) {
        res
          .status(500)
          .send({ message: "Erro interno no Servidor Controller" });
    }
}

