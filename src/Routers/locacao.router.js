const express = require('express');
const router = express.Router();
const locacaoController = require('../Controllers/locacao.controller');

//rota para listar todas as locacoes
router.get('/', locacaoController.getLocacoes);

router.get("/carros-nao-alugados", locacaoController.getCarrosNaoAlugados);

router.get("/receita-total", locacaoController.calcularReceitaTotal);
//rota para listar uma locacao pelo id
router.get('/:id', locacaoController.getLocacaoById);

//rota para adicionar uma locacao
router.post('/', locacaoController.createLocacao);

//rota para atualizar uma locacao
router.put('/:id', locacaoController.updateLocacao);

//rota para deletar uma locacao
router.delete('/:id', locacaoController.deleteLocacao);


module.exports = router;