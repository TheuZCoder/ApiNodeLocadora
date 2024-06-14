const express = require('express');
const router = express.Router();
const clienteController = require('../Controllers/cliente.controller');

//rota para listar todos os clientes
router.get('/', clienteController.getClientes);

// Rota para listar clientes com carros alugados
router.get('/aluguel', clienteController.getClientesComCarrosAlugados);

//rota para listar um cliente pelo id
router.get('/:id', clienteController.getClienteById);

//rota para adicionar um cliente
router.post('/', clienteController.createCliente);

//rota para atualizar um cliente
router.put('/:id', clienteController.updateCliente);

//rota para deletar um cliente
router.delete('/:id', clienteController.deleteCliente);


module.exports = router;