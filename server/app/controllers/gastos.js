const gastos = require('../models/gastos')

const create_gastos = async(req, res) => {
    const { nome, valor, estado, descricao, data, tipo, comprovativo } = req.body;
    if (!nome && !valor && !estado && !descricao && !tipo && !comprovativo) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        valor,
        estado,
        descricao,
        data,
        tipo,
        comprovativo
    }

    gastos.create(datas);

    res.status(200).json("Gastos was created");
}

const get_gastos = async(req, res) => {
    const allGastos = req.params;
    const findGastos = gastos.find(allGastos);
    if(!findGastos) {
        return res.status(404).json({ error: "Gastos not found" });
    }

    res.json(findGastos);
}

const get_gastos_id = async(req, res) => {
    const idGastos = req.params.id;
    const findIdGastos = gastos.findOne((e) => e.id === idGastos);
    if (!findIdGastos) {
        return res.status(404).json({ error: "Gastos not exist"});
    }

    res.json(findIdGastos)
}

const update_gastos = async(req, res) => {
    const idGastos = req.params
    const findGastos = gastos.findOne((e) => e.id === idGastos.id);
    if(!findGastos) {
        return res.status(404).json({ error: "Gastos not found"});
    }

    findGastos.nome = idGastos.nome;
    findGastos.descricao  = idGastos.descricao;
    findGastos.data = idGastos.data;
    findGastos.estado = idGastos.estado;
    findGastos.valor = idGastos.valor;
    findGastos.comprovativo = idGastos.comprovativo;

    res.send(findGastos).json("Gastos updated")
}

const delete_gastos = async(req, res) => {
    const idGastos = req.params.id;
    const findGastos = gastos.findOne((e) => e.id === idGastos)
    if(!findGastos) {
        res.status(404).json({ error: "Gastos not found"});
    }

    gastos.deleteOne(findGastos);
    res.status(204).json("Gastos deleted");
}


module.exports = { create_gastos, get_gastos, get_gastos_id, update_gastos, delete_gastos }
