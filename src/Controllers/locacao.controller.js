const locacaoModel = require('../Models/locacao.model');

exports.getLocacoes = async (req, res) => {
    try {
        const locacoes = await locacaoModel.getLocacoes();
        res.json(locacoes);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.getLocacaoById = async (req, res) => {
    try {
        const locacao = await locacaoModel.getLocacaoById(req.params.id);
        res.json(locacao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.createLocacao = async (req, res) => {
    try {
        const locacao = await locacaoModel.createLocacao(req.body);
        res.json(locacao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.updateLocacao = async (req, res) => {
    try {
        const locacao = await locacaoModel.updateLocacao(req.params.id, req.body);
        res.json(locacao);
    }   catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.deleteLocacao = async (req, res) => {
    try {
        const locacao = await locacaoModel.deleteLocacao(req.params.id);
        res.json(locacao);
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no Servidor Controller' });
    }
}

exports.calcularReceitaTotal = async (req, res) => {
  const { dataInicio, dataFim } = req.query;

  try {
    const receitaTotal = await locacaoModel.calcularReceitaTotal(
      dataInicio,
      dataFim
    );
    res.json({ receita_total: receitaTotal });
  } catch (error) {
    console.log("Erro interno no Servidor Controller: ", error);
    res.status(500).send({ message: "Erro interno no Servidor Controller" });
  }
};

exports.getCarrosNaoAlugados = async (req, res) => {
  try {
    const carrosNaoAlugados = await locacaoModel.getCarrosNuncaAlugados();
    res.json(carrosNaoAlugados);
  } catch (error) {
    console.log("Erro interno no Servidor Controller: ", error);
    res.status(500).send({ message: "Erro interno no Servidor Controller" });
  }
};


