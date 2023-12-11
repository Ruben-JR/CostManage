const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String, required: true }
    },
    { collection: "tag" }
)

const model = mongoose.model("tag", tagSchema)

module.exports = model
