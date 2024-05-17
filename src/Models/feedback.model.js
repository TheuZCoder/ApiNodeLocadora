const db = require('../Infraestrutura/database');

const getFeedbacks = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM feedback');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de feedbacks: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de feedbacks" })
    }
}

const getFeedbackById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM feedback WHERE id = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de feedback por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de feedback por id" })
    }
}

const createFeedback = async (feedback) => {
    try {
        const { rows } = await db.query('INSERT INTO feedback (nota, comentario, id_cliente) VALUES ($1, $2, $3) RETURNING *', [feedback.nota
            , feedback.comentario, feedback.id_cliente]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante criação de feedback: ", error)
        res.status(500).json({ message: "Erro durante criação de feedback" })
    }
}

const updateFeedback = async (id, feedback) => {
    try {
        const { rows } = await db.query('UPDATE feedback SET nota = $1, comentario = $2, id_cliente = $3 WHERE id = $4 RETURNING *', [feedback.nota
            , feedback.comentario, feedback.id_cliente, id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de feedback: ", error)
        res.status(500).json({ message: "Erro durante atualização de feedback" })
    }
}

const deleteFeedback = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM feedback WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de feedback: ", error)
        res.status(500).json({ message: "Erro durante exclusão de feedback" })
    }
}

module.exports = {
    getFeedbacks,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback
}