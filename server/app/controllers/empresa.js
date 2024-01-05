const empresa = require('../models/empresa')

const create_empresa = async(req, res) => {
    const { nome, telefone, localizacao, email } = req.body;
    if (!nome && !telefone && !localizacao && !email) {
        return res.status(400).json({ error: "Missing requires fields" });
    }

    const datas = {
        nome,
        telefone,
        localizacao,
        email,
    }

    empresa.create(datas);

    res.status(200).json("Empresa was created");
}

const get_empresa = async(req, res) => {
    const allEmpresa = req.params;
    const findEmpresa = empresa.find(allEmpresa);
    if(!findEmpresa) {
        return res.status(404).json({ error: "Empresa not found" });
    }

    res.json(findEmpresa);
}

const get_empresa_id = async(req, res) => {
    const idEmpresa = req.params.id;
    const findIdEmpresa = empresa.findOne((e) => e.id === idEmpresa);
    if (!findIdEmpresa) {
        return res.status(404).json({ error: "Empresa not exist"});
    }

    res.json(findIdEmpresa)
}

const update_empresa = async(req, res) => {
    const idEmpresa = req.params
    const findEmpresa = empresa.findOne((e) => e.id === idEmpresa.id);
    if(!findEmpresa) {
        return res.status(404).json({ error: "Empresa not found"});
    }

    findEmpresa.nome = idEmpresa.nome;
    findEmpresa.telefone  = idEmpresa.telefone;
    findEmpresa.localizacao = idEmpresa.localizacao;
    findEmpresa.email = idEmpresa.email;

    res.send(findEmpresa).json("Empresa updated")
}

const delete_empresa = async(req, res) => {
    const idEmpresa = req.params.id;
    const findEmpresa = empresa.findOne((e) => e.id === idEmpresa)
    if(!findEmpresa) {
        res.status(404).json({ error: "Empresa not found"});
    }

    empresa.deleteOne(findEmpresa);
    res.status(204).json("Empresa deleted");
}


module.exports = { create_empresa, get_empresa, get_empresa_id, update_empresa, delete_empresa }
