const express = require('express');
const router = express.Router();
const carroController = require('../Controllers/carro.controller');

//rota para listar todos os carros
router.get('/', carroController.getCarros);

//rota para listar um carro pelo id
router.get('/:id', carroController.getCarroById);

//rota para adicionar um carro 
router.post('/', carroController.createCarro);

//rota para atualizar um carro
router.put('/:id', carroController.updateCarro);

//rota para deletar um carro
router.delete('/:id', carroController.deleteCarro);

module.exports = router;