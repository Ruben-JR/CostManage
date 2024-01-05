const mongoose = require("mongoose")

const empresaSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        telefone: { type: Number, required: true },
        localizacao: { type: String, required: true },
        email: { type: String, required: true },
    },
    { collection: "empresa" }
)

const empresa = mongoose.model("empresa", empresaSchema)

module.exports = empresa
