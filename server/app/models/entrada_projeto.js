const mongoose = require("mongoose")

const entrada_projetoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "entrada_projeto" }
)

const model = mongoose.model("entrada_projeto", entrada_projetoSchema)

module.exports = model
