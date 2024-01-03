const entrada = require('../models/entrada')

const create_entrada = async(req, res) => {
    const { nome, descricao, data, estado, valor, comprovativo } = req.body;
    if (!nome && !descricao && !data && !estado && !valor && !comprovativo) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        descricao,
        data,
        estado,
        valor,
        comprovativo
    }

    entrada.create(datas);

    res.status(200).json("Entrada was created");
}

const get_entrada = async(req, res) => {
    const allEntrada = req.params;
    const findEntrada = entrada.find(allEntrada);
    if(!findEntrada) {
        return res.status(404).json({ error: "Entradas not found" });
    }

    res.json(findEntrada);
}

const get_entrada_id = async(req, res) => {
    const idEntrada = req.params.id;
    const findIdEntrada = entrada.findOne((e) => e.id === idEntrada);
    if (!findIdEntrada) {
        return res.status(404).json({ error: "Entrada not exist"});
    }

    res.json(findIdEntrada)
}

const update_entrada = async(req, res) => {
    const idEntrada = req.params
    const findEntrada = entrada.findOne((e) => e.id === idEntrada.id);
    if(!findEntrada) {
        return res.status(404).json({ error: "Entrada not found"});
    }

    findEntrada.nome = idEntrada.nome;
    findEntrada.descricao  = idEntrada.descricao;
    findEntrada.data = idEntrada.data;
    findEntrada.estado = idEntrada.estado;
    findEntrada.valor = idEntrada.valor;
    findEntrada.comprovativo = idEntrada.comprovativo;

    res.send(findEntrada).json("Entrada updated")
}

const delete_entrada = async(req, res) => {
    const idEntrada = req.params.id;
    const findEntrada = entrada.findOne((e) => e.id === idEntrada)
    if(!findEntrada) {
        res.status(404).json({ error: "Entrada not found"});
    }

    entrada.deleteOne(findEntrada);
    res.status(204).json("Entrada deleted");
}


module.exports = { create_entrada, get_entrada, get_entrada_id, update_entrada, delete_entrada }
