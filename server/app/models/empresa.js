const mongoose = require("mongoose")

const empresaSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        data: { type: Date, required: true },
        estado: { type: String, required: true },
        valor: { type: Number, required: true },
        comprovativo: { type: String, required: true }
    },
    { collection: "empresa" }
)

const empresa = mongoose.model("empresa", empresaSchema)

module.exports = empresa
