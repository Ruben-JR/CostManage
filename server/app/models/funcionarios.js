const mongoose = require("mongoose")

const funcionariosSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
    },
    { collection: "funcionarios" }
)

const model = mongoose.model("funcionarios", funcionariosSchema)

module.exports = model
