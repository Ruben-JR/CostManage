const mongoose = require("mongoose")

const projetosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "projetos" }
)

const model = mongoose.model("projetos", projetosSchema)

module.exports = model
