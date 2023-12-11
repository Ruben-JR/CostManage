const mongoose = require("mongoose")

const tipo_gastosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true },
        estado: { type: String, required: true }
    },
    { collection: "tipo_gastos" }
)

const model = mongoose.model("tipo_gastos", tipo_gastosSchema)

module.exports = model
