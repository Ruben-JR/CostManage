const mongoose = require("mongoose")

const funcionariosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        idade: { type: Number, required: true },
        telefone: { type: Number, required: true },
        morada: { type: String, required: true },
        email: { type: String, required: true },
        tipo_documento: { type: String, required: true },
        numero_documento: { type: Number, required: true },
        estado: { type: string, required: true }
    },
    { collection: "funcionarios" }
)

const model = mongoose.model("funcionarios", funcionariosSchema)

module.exports = model
