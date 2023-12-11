const mongoose = require("mongoose")

const projetos_funcionariosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "projetos_funcionarios" }
)

const model = mongoose.model("projetos_funcionarios", projetos_funcionariosSchema)

module.exports = model
