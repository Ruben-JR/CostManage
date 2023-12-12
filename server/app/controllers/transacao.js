const transacao = require('../models/transacao')

const create_transacao = async(req, res) => {
    const { nome, descricao, data ,valor, estado } = req.body;
    if (!nome && !descricao && !valor && !estado) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        descricao,
        data,
        valor,
        estado,
    }

    transacao.create(datas);

    res.status(200).json("Transação was created");
}

const get_transacao = async(req, res) => {
    const allTransac = req.params;
    const findTransac = transacao.find(allTransac);
    if(!findTransac) {
        return res.status(404).json({ error: "Transação not found" });
    }

    res.json(findTransac);
}

const get_transacao_id = async(req, res) => {
    const idTransac = req.params.id;
    const findIdTransac = transacao.findOne((e) => e.id === idTransac);
    if (!findIdTransac) {
        return res.status(404).json({ error: "Transação not exist"});
    }

    res.json(findIdTransac)
}

const update_transacao = async(req, res) => {
    const idTransac = req.params
    const findTransac = transacao.findOne((e) => e.id === idTransac.id);
    if(!findTransac) {
        return res.status(404).json({ error: "Transação not found"});
    }

    findTransac.nome = idTransac.nome;
    findTransac.descricao  = idTransac.descricao;
    findTransac.data = idTransac.data;
    findTransac.estado = idTransac.estado;
    findTransac.valor = idTransac.valor;
    findTransac.comprovativo = idTransac.comprovativo;

    res.send(findTransac).json("Transação updated")
}

const delete_transacao = async(req, res) => {
    const idTransac = req.params.id;
    const findTransac = transacao.findOne((e) => e.id === idTransac)
    if(!findTransac) {
        res.status(404).json({ error: "Transação not found"});
    }

    transacao.deleteOne(findTransac);
    res.status(204).json("Transação deleted");
}


module.exports = { create_transacao, get_transacao, get_transacao_id, update_transacao, delete_transacao }
