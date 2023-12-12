const tag = require('../models/tag')

const create_tag = async(req, res) => {
    const { nome, descrisao } = req.body;
    if (!nome && !descrisao) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        descricao,
    }

    tag.create(datas);

    res.status(200).json("Tag was created");
}

const get_tag = async(req, res) => {
    const allTag = req.params;
    const findTag = tag.find(allTag);
    if(!findTag) {
        return res.status(404).json({ error: "Tag not found" });
    }

    res.json(findProjetos);
}

const get_tag_id = async(req, res) => {
    const idTag = req.params.id;
    const findIdTag = tag.findOne((e) => e.id === idTag);
    if (!findIdTag) {
        return res.status(404).json({ error: "Tag not exist"});
    }

    res.json(findIdTag)
}

const update_tag = async(req, res) => {
    const idTag = req.params
    const findTag = tag.findOne((e) => e.id === idTag.id);
    if(!findTag) {
        return res.status(404).json({ error: "Tag not found"});
    }

    findTag.nome = idTag.nome;
    findTag.descricao  = idTag.descricao;
    findTag.data = idTag.data;
    findTag.estado = idTag.estado;
    findTag.valor = idTag.valor;
    findTag.comprovativo = idTag.comprovativo;

    res.send(findTag).json("Tag updated")
}

const delete_tag = async(req, res) => {
    const idTag = req.params.id;
    const findTag = tag.findOne((e) => e.id === idTag)
    if(!findTag) {
        res.status(404).json({ error: "Tag not found"});
    }

    tag.deleteOne(findTag);
    res.status(204).json("Tag deleted");
}


module.exports = { create_tag, get_tag, get_tag_id, update_tag, delete_tag }
