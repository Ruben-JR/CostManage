const mongoose = require("mongoose")

const transacaoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        data: { type: Date, required: true },
        valor: { type: Number, required: true },
        estado: { type: Number, required: true }
    },
    { collection: "transacao" }
)

const model = mongoose.model("transacao", transacaoSchema)

module.exports = model
