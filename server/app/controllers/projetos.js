const projetos = require('../models/projetos')

const create_projetos = async(req, res) => {
    const { nome, descrisao, dataInicio, dataFinal, valorTotal, estado, tipo } = req.body;
    if (!nome && !descrisao && !dataInicio && !dataFinal && !valorTotal && !estado && !tipo) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        descricao,
        dataInicio,
        dataFinal,
        valorTotal,
        estado,
        tipo
    }

    projetos.create(datas);

    res.status(200).json("Projetos was created");
}

const get_projetos = async(req, res) => {
    const allProjetos = req.params;
    const findProjetos = projetos.find(allProjetos);
    if(!findProjetos) {
        return res.status(404).json({ error: "Projetos not found" });
    }

    res.json(findProjetos);
}

const get_projetos_id = async(req, res) => {
    const idProjetos = req.params.id;
    const findIdProjetos = projetos.findOne((e) => e.id === idProjetos);
    if (!findIdProjetos) {
        return res.status(404).json({ error: "Projetos not exist"});
    }

    res.json(findIdProjetos)
}

const update_projetos = async(req, res) => {
    const idProjetos = req.params
    const findProjetos = projetos.findOne((e) => e.id === idProjetos.id);
    if(!findProjetos) {
        return res.status(404).json({ error: "Projetos not found"});
    }

    findProjetos.nome = idProjetos.nome;
    findProjetos.descricao  = idProjetos.descricao;
    findProjetos.data = idProjetos.data;
    findProjetos.estado = idProjetos.estado;
    findProjetos.valor = idProjetos.valor;
    findProjetos.comprovativo = idProjetos.comprovativo;

    res.send(findProjetos).json("Projetos updated")
}

const delete_projetos = async(req, res) => {
    const idProjetos = req.params.id;
    const findProjetos = projetos.findOne((e) => e.id === idProjetos)
    if(!findProjetos) {
        res.status(404).json({ error: "Projetos not found"});
    }

    projetos.deleteOne(findProjetos);
    res.status(204).json("Projetos deleted");
}


module.exports = { create_projetos, get_projetos, get_projetos_id, update_projetos, delete_projetos }
