const db = require("../Infraestrutura/database");

const getFeedbacks = async () => {
  try {
    const { rows } = await db.query("SELECT * FROM feedback");
    return rows;
  } catch (error) {
    console.log("Erro durante pesquisa de feedbacks: ", error);
    res.status(500).json({ message: "Erro durante pesquisa de feedbacks" });
  }
};

const getFeedbackById = async (id) => {
  try {
    const { rows } = await db.query(
      "SELECT * FROM feedback WHERE id_feedback = $1",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante pesquisa de feedback por id: ", error);
    res
      .status(500)
      .json({ message: "Erro durante pesquisa de feedback por id" });
  }
};

const createFeedback = async (feedback) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO feedback (id_locacao, id_cliente, data_feedback, avaliacao, comentario) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        feedback.id_locacao,
        feedback.id_cliente,
        feedback.data_feedback,
        feedback.avaliacao,
        feedback.comentario,
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante criação de feedback: ", error);
    res.status(500).json({ message: "Erro durante criação de feedback" });
  }
};

const updateFeedback = async (id, feedback) => {
  try {
    const { rows } = await db.query(
      "UPDATE feedback SET id_locacao = $1, id_cliente = $2, data_feedback = $3, avaliacao = $4, comentario = $5  WHERE id_feedback = $6 RETURNING *",
      [
        feedback.id_locacao,
        feedback.id_cliente,
        feedback.data_feedback,
        feedback.avaliacao,
        feedback.comentario,
        feedback.id_feedback
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante atualização de feedback: ", error);
    res.status(500).json({ message: "Erro durante atualização de feedback" });
  }
};

const deleteFeedback = async (id) => {
  try {
    const { rows } = await db.query(
      "DELETE FROM feedback WHERE id_feedback = $1 RETURNING *",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante exclusão de feedback: ", error);
    res.status(500).json({ message: "Erro durante exclusão de feedback" });
  }
};

module.exports = {
  getFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
