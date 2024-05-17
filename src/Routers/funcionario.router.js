const express = require('express');
const router = express.Router();
const funcionarioController = require('../Controllers/funcionario.controller');

//rota para listar todos os funcionarios
router.get('/', funcionarioController.getFuncionarios);

//rota para listar um funcionario pelo id
router.get('/:id', funcionarioController.getFuncionarioById);

//rota para adicionar um funcionario
router.post('/', funcionarioController.createFuncionario);

//rota para atualizar um funcionario
router.put('/:id', funcionarioController.updateFuncionario);

//rota para deletar um funcionario
router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;