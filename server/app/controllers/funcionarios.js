const funcionarios = require('../models/funcionarios')

const create_funcionarios = async(req, res) => {
    const { nome, idade, telefone, morada, email, tipo_doc, numero_doc, estado} = req.body;
    if(!nome && !idade && !telefone && !morada && !email && !tipo_doc && !numero_doc && !estado) {
        return res.status(400).json({ error: "Missing required fields"});
    }

    const datas = {
        nome,
        idade,
        telefone,
        morada,
        email,
        tipo_doc,
        numero_doc,
        estado
    }

    funcionarios.create(datas)

    res.status(200).json("Funcionario was created");
}

const get_funcionarios = async(req, res) => {
    const allFunc = req.params;
    const findFunc = funcionarios.find(allFunc);
    if(!findFunc) {
        return res.status(404).json({ error: "Funcionarios not found"});
    }

    res.json(findFunc);
}

const get_funcionarios_id = async(req, res) => {
    const idFunc = req.params.id;
    const findIdFunc = funcionarios.findOne((f) => f.id === idFunc);
    if(!findIdFunc) {
        return res.status(404).json({ error: "Funcionario not exist" });
    }

    res.json(findIdFunc);
}

const update_funcionarios = async(req, res) => {
    const idFunc = req.params;
    const findFunc = funcionarios.findOne((f) => f.id === idFunc.id);
    if(!findFunc) {
        return res.status(404).json({ error: "Funcionario not found"});
    }

    findFunc.nome = idFunc.nome;
    findFunc.idade = idFunc.idade;
    findFunc.telefone = idFunc.telefone;
    findFunc.morada = idFunc.morada;
    findFunc.email = idFunc.email;
    findFunc.tipo_doc = idFunc.tipo_doc;
    findFunc.numero_doc = idFunc.numero_doc;
    findFunc.estado = idFunc.estado;

    res.send(findFunc).json("Funcionario updated");
}

const delete_funcionarios = async(req, res) => {
    const idfunc = req.params.id;
    const findFunc = funcionarios.findOne((f) => f.id === idfunc);
    if(!findFunc) {
        return res.status(404).json({ error: "Funcionario not found"});
    }

    funcionarios.deleteOne(findFunc);
    res.status(204).json("Funcionario deleted");
}


module.exports = { create_funcionarios, get_funcionarios, get_funcionarios_id, update_funcionarios, delete_funcionarios }
