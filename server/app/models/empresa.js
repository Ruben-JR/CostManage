const mongoose = require("mongoose")

const empresaSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "empresa" }
)

const model = mongoose.model("empresa", empresaSchema)

module.exports = model
