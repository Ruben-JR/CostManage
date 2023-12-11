const mongoose = require("mongoose")

const transacaoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "transacao" }
)

const model = mongoose.model("transacao", transacaoSchema)

module.exports = model
