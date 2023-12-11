const mongoose = require("mongoose")

const gastosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "gastos" }
)

const model = mongoose.model("gastos", gastosSchema)

module.exports = model
