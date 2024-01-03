const tipo_gastos = require('../models/tipo_gastos')

const create_tipo_gastos = async(req, res) => {
    const { nome, descrisao, estado } = req.body;
    if (!nome && !descrisao && !estado) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        descricao,
        estado
    }

    tipo_gastos.create(datas);

    res.status(200).json("Tipo gastos was created");
}

const get_tipo_gastos = async(req, res) => {
    const allTipo_gastos = req.params;
    const findTipo_gastos = tipo_gastos.find(allTipo_gastos);
    if(!findTipo_gastos) {
        return res.status(404).json({ error: "Tipo gasto not found" });
    }

    res.json(findTipo_gastos);
}

const get_tipo_gastos_id = async(req, res) => {
    const idTipo_gasto = req.params.id;
    const findIdTipo_gasto = tipo_gastos.findOne((e) => e.id === idTipo_gasto);
    if (!findIdTipo_gasto) {
        return res.status(404).json({ error: "Tipo gasto not exist"});
    }

    res.json(findIdTipo_gasto)
}

const update_tipo_gastos = async(req, res) => {
    const idTipo_gasto = req.params
    const findTipo_gasto = tipo_gastos.findOne((e) => e.id === idTipo_gasto.id);
    if(!findTipo_gasto) {
        return res.status(404).json({ error: "Tipo_gasto not found"});
    }

    findTipo_gasto.nome = idTipo_gasto.nome;
    findTipo_gasto.descricao  = idTipo_gasto.descricao;
    findTipo_gasto.estado = idTipo_gasto.estado;

    res.send(findTipo_gasto).json("Tipo gasto updated")
}

const delete_tipo_gastos = async(req, res) => {
    const idTipo_gasto = req.params.id;
    const findTipo_gasto = tipo_gastos.findOne((e) => e.id === idTipo_gasto)
    if(!findTipo_gasto) {
        res.status(404).json({ error: "Tipo gasto not found"});
    }

    tipo_gastos.deleteOne(findTipo_gasto);
    res.status(204).json("Tipo gasto deleted");
}


module.exports = { create_tipo_gastos, get_tipo_gastos, get_tipo_gastos_id, update_tipo_gastos, delete_tipo_gastos }
