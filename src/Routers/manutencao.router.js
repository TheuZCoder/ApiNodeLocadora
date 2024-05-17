const express = require('express');
const router = express.Router();
const manutencaoController = require('../Controllers/manutencao.controller');

//rota para listar todas as manutencoes
router.get('/', manutencaoController.getManutencoes);

//rota para listar uma manutencao pelo id
router.get('/:id', manutencaoController.getManutencaoById);

//rota para adicionar uma manutencao
router.post('/', manutencaoController.createManutencao);

//rota para atualizar uma manutencao
router.put('/:id', manutencaoController.updateManutencao);

//rota para deletar uma manutencao
router.delete('/:id', manutencaoController.deleteManutencao);

module.exports = router;