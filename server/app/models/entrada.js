const mongoose = require("mongoose")

const entradaSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "entrada" }
)

const model = mongoose.model("entrada", entradaSchema)

module.exports = model
