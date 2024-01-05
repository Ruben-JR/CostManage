const CircularJSON = require('circular-json');

const projetos = require('../models/projetos')

const create_projetos = async(req, res) => {
    try {

        const { nome, descrisao, dataInicio, dataFinal, valorTotal, estado, tipo } = req.body;
        if (!nome && !descrisao && !dataInicio && !dataFinal && !valorTotal && !estado && !tipo) {
            return res.status(400).json({ error: "Missing requires fields" });
        }
        
        const datas = {
            nome,
            descrisao,
            dataInicio,
            dataFinal,
            valorTotal,
            estado,
            tipo
        }
        
        projetos.create(datas);
        
        res.status(200).json("Projetos was created");
    } catch (error) {
        console.error("Error in create projetos", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const get_projetos = async (req, res) => {
    try {
        const allProjetos = req.params;
        const findProjetos = await projetos.find(allProjetos);

        if (!findProjetos) {
            return res.status(404).json({ error: "Projetos not found" });
        }

        res.json(CircularJSON.stringify(findProjetos));
    } catch (error) {
        console.error("Error in get projetos:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


const get_projetos_id = async(req, res) => {
    try {
        const idProjetos = req.params.id;
        const findIdProjetos = await projetos.findOne({ id: idProjetos });
        if (!findIdProjetos) {
            return res.status(404).json({ error: "Projetos not exist" });
        }
    
        res.json(findIdProjetos)
    } catch (error) {
        console.error("Error in get projeto id", error);
        return res.status(500).json({ error: "Interna server error" });
    }
}

const update_projetos = async(req, res) => {
    try {
        const idProjetos = req.params.id
        const findProjetos = await projetos.findOne({ id: idProjetos });
        if(!findProjetos) {
            return res.status(404).json({ error: "Projetos not found" });
        }
        
        findProjetos.nome = idProjetos.nome;
        findProjetos.descricao  = idProjetos.descricao;
        findProjetos.dataInicio = idProjetos.dataInicio;
        findProjetos.dataFinal = idProjetos.dataFinal;
        findProjetos.valorTotal = idProjetos.valorTotal;
        findProjetos.tipo = idProjetos.tipo;
        
        res.send(findProjetos).json("Projetos updated")
    } catch (error) {
        console.error("Error in update projetos", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const delete_projetos = async(req, res) => {
    try {
        const idProjetos = req.params.id;
        const findProjetos = await projetos.findOne({ id: idProjetos })
        if(!findProjetos) {
            res.status(404).json({ error: "Projetos not found" });
        }
        
        projetos.deleteOne(findProjetos);
        res.status(204).json("Projetos deleted");
    } catch (error) {
        console.error("Error on delete projetos", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { create_projetos, get_projetos, get_projetos_id, update_projetos, delete_projetos }
