const empresa = require('../models/empresa')

const create_empresa = async(req, res) => {
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

    empresa.create(datas);

    res.status(200).json("Entrada was created");
}

const get_empresa = async(req, res) => {
    const allEntrada = req.params;
    const findEntrada = empresa.find(allEntrada);
    if(!findEntrada) {
        return res.status(404).json({ error: "Entradas not found" });
    }

    res.json(findEntrada);
}

const get_empresa_id = async(req, res) => {
    const idEntrada = req.params.id;
    const findIdEntrada = empresa.findOne((e) => e.id === idEntrada);
    if (!findIdEntrada) {
        return res.status(404).json({ error: "Entrada not exist"});
    }

    res.json(findIdEntrada)
}

const update_empresa = async(req, res) => {
    const idEntrada = req.params
    const findEntrada = empresa.findOne((e) => e.id === idEntrada.id);
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

const delete_empresa = async(req, res) => {
    const idEntrada = req.params.id;
    const findEntrada = empresa.findOne((e) => e.id === idEntrada)
    if(!findEntrada) {
        res.status(404).json({ error: "Entrada not found"});
    }

    empresa.deleteOne(findEntrada);
    res.status(204).json("Entrada deleted");
}


module.exports = { create_empresa, get_empresa, get_empresa_id, update_empresa, delete_empresa }
