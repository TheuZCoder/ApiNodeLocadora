const feedbackModel = require('../Models/feedback.model');

exports.getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await feedbackModel.getFeedbacks();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await feedbackModel.getFeedbackById(req.params.id);
        res.json(feedback);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.createFeedback = async (req, res) => {
    try {
        const feedback = await feedbackModel.createFeedback(req.body);
        res.json(feedback);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.updateFeedback = async (req, res) => {
    try {
        const feedback = await feedbackModel.updateFeedback(req.params.id, req.body);
        res.json(feedback);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.deleteFeedback = async (req, res) => {
    try {
        const feedback = await feedbackModel.deleteFeedback(req.params.id);
        res.json(feedback);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}