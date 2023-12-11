const express = require('express');

const entrada = require("./routes/entrada")
const funcionarios = require("./routes/funcionarios")
const gastos = require("./routes/gastos")
const projetos = require("./routes/projetos")
const tag = require("./routes/tag")
const tipo_gasto = require("./routes/tipo_gastos")
const transacao = require("./routes/transacao")

// Express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
	next()
})

// routes
app.use("/entrada", entrada)
app.use("/funcionarios", funcionarios)
app.use("/gastos", gastos)
app.use("/projetos", projetos)
app.use("/tag", tag)
app.use("/tipo-gasto", tipo_gasto)
app.use("/transacao", transacao)

module.exports = app
