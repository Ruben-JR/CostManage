const mongoose = require("mongoose")

const projetosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descrisao: { type: String, required: true },
        dataInicio: { type: Date, require: true },
        dataFinal: { type: Date, require: true },
        valorToral: { type: Number, require: true },
        estado: { type: String, require: true },
        tipo: { type: String, require: false}
    },
    { collection: "projetos" }
)

const projetos = mongoose.model("projetos", projetosSchema)

module.exports = projetos
