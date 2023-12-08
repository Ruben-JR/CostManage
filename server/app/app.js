const express = require('express');

const entrada = require("./routes/entrada")
const gastos = require("./routes/empresa")
const funcionarios = require("./routes/funcionarios")
const gastos = require("./routes/gastos")
const projetos = require("./routes/projetos")
const tag = require("./routes/tag")
const tipoGasto = require("./routes/tipoGastos")
const transacao = require("./routes/transacao")

// Express app
const app = express();

// middleware
app.use(express.json())

// routes
app.use("/empresa", empresa)
app.use("/entrada", entrada)
app.use("/funcionarios", funcionarios)
app.use("/gastos", gastos)
app.use("/projetos", projetos)
app.use("/tag", tag)
app.use("/tipo-gasto", tipoGasto)
app.use("/transacao", transacao)

module.exports = app
