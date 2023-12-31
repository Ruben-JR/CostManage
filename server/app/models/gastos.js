const mongoose = require("mongoose")

const gastosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        valor: { type: Number, required: true },
        estado: { type: Boolean, required: true },
        descricao: { type: String, required: true },
        data: { type: Date, required: true },
        tipo: { type: String, required: true },
        comprovativo: { type: String, required: true }
    },
    { collection: "gastos" }
)

const gastos = mongoose.model("gastos", gastosSchema)

module.exports = gastos
