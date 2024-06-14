const db = require('../Infraestrutura/database');

const getClientes = async () => {
    try {
        const { rows } = await db.query('SELECT * FROM cliente');
        return rows;
    } catch (error) {
        console.log("Erro durante pesquisa de clientes: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de clientes" })
    }
}

const getClienteById = async (id) => {
    try {
        const { rows } = await db.query('SELECT * FROM cliente WHERE id_cliente = $1', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante pesquisa de cliente por id: ", error)
        res.status(500).json({ message: "Erro durante pesquisa de cliente por id" })
    }
}

const createCliente = async (
  nome_cliente,
  endereco_cliente,
  cidade_cliente,
  estado_cliente,
  celular_cliente,
  email_cliente,
  senha_cliente
) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO cliente (nome_cliente, endereco_cliente, cidade_cliente, estado_cliente, celular_cliente, email_cliente, senha_cliente) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        nome_cliente,
        endereco_cliente,
        cidade_cliente,
        estado_cliente,
        celular_cliente,
        email_cliente,
        senha_cliente
      ]
    );
    return rows[0];
  } catch (error) {
    console.log("Erro durante criação de cliente: ", error);
    res.status(500).json({ message: "Erro durante criação de cliente" });
  }
};

const updateCliente = async (id, cliente) => {
    try {
        const { rows } = await db.query(
          "UPDATE cliente SET nome_cliente = $1, endereco_cliente = $2, cidade_cliente = $3, estado_cliente = $4, celular_cliente = $5, email_cliente = $6, senha_cliente = $7  WHERE id_cliente = $8 RETURNING *",
          [
            cliente.nome_cliente,
            cliente.endereco_cliente,
            cliente.cidade_cliente,
            cliente.estado_cliente,
            cliente.celular_cliente,
            cliente.email_cliente,
            cliente.senha_cliente,
            cliente.id_cliente,
          ]
        );
        return rows[0];
    } catch (error) {
        console.log("Erro durante atualização de cliente: ", error)
        res.status(500).json({ message: "Erro durante atualização de cliente" })
    }
}

const deleteCliente = async (id) => {
    try {
        const { rows } = await db.query('DELETE FROM cliente WHERE id_cliente = $1 RETURNING *', [id]);
        return rows[0];
    } catch (error) {
        console.log("Erro durante exclusão de cliente: ", error)
        res.status(500).json({ message: "Erro durante exclusão de cliente" })
    }
}

const getClientesComCarrosAlugados = async () => {
  try {
    const { rows } = await db.query(`
      SELECT c.id_cliente, c.nome_cliente, ca.id_carro, ca.modelo_carro, ca.ano_carro 
      FROM cliente c 
      JOIN locacao a ON c.id_cliente = a.id_cliente 
      JOIN carro ca ON a.id_carro = ca.id_carro
    `);
    return rows.map((row) => ({
      cliente: {
        id_cliente: row.id_cliente,
        nome_cliente: row.nome_cliente,
      },
      carro: {
        id_carro: row.id_carro,
        modelo_carro: row.modelo_carro,
        ano_carro: row.ano_carro,
      },
    }));
  } catch (error) {
    console.log(
      "Erro durante pesquisa de clientes com carros alugados: ",
      error
    );
    res
      .status(500)
      .json({
        message: "Erro durante pesquisa de clientes com carros alugados",
      });
  }
};

module.exports = {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente,
    getClientesComCarrosAlugados
}