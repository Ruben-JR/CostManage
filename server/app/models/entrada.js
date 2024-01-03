const mongoose = require("mongoose")

const entradaSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        data: { type: Date, required: true },
        estado: { type: String, required: true },
        valor: { type: Number, required: true },
        comprovativo: { type: String, required: true }
    },
    { collection: "entrada" }
)

const entrada = mongoose.model("entrada", entradaSchema)

module.exports = entrada
