const express = require('express');
const router = express.Router();
const comprovanteController = require('../Controllers/comprovante.controller');

//rota para listar todos os comprovantes
router.get('/', comprovanteController.getComprovantes);

//rota para listar um comprovante pelo id
router.get('/:id', comprovanteController.getComprovanteById);

//rota para adicionar um comprovante
router.post('/', comprovanteController.createComprovante);

//rota para atualizar um comprovante
router.put('/:id', comprovanteController.updateComprovante);

//rota para deletar um comprovante
router.delete('/:id', comprovanteController.deleteComprovante);

module.exports = router;