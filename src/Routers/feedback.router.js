const express = require('express');
const router = express.Router();
const feedbackController = require('../Controllers/feedback.controller');

//rota para listar todos os feedbacks
router.get('/', feedbackController.getFeedbacks);

//rota para listar um feedback pelo id
router.get('/:id', feedbackController.getFeedbackById);

//rota para adicionar um feedback
router.post('/', feedbackController.createFeedback);

//rota para atualizar um feedback
router.put('/:id', feedbackController.updateFeedback);

//rota para deletar um feedback
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;