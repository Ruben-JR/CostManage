const mongoose = require("mongoose")

const funcionariosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        idade: { type: Number, required: true },
        telefone: { type: Number, required: true },
        morada: { type: String, required: true },
        email: { type: String, required: true },
        tipo_doc: { type: String, required: true },
        numero_doc: { type: Number, required: true },
        estado: { type: String, required: true }
    },
    { collection: "funcionarios" }
)

const funcionarios = mongoose.model("funcionarios", funcionariosSchema)

module.exports = funcionarios
