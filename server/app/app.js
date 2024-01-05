const express = require('express');
const cors = require('cors');

const entrada = require("./routes/entrada")
const funcionarios = require("./routes/funcionarios")
const gastos = require("./routes/gastos")
const projetos = require("./routes/projetos")
const tag = require("./routes/tag")
const tipo_gasto = require("./routes/tipo_gastos")
const transacao = require("./routes/transacao")
const empresa = require("./routes/empresa")

// Express app
const app = express();
app.use(cors());	

// NOTE: middleware
app.use(express.json()) //get request body

app.use((req, res, next) => {
	next()
})

// routes
app.use("/entrada", entrada)
app.use("/funcionarios", funcionarios)
app.use("/gastos", gastos)
app.use("/projetos", projetos)
app.use("/tag", tag)
app.use("/tipo-gastos", tipo_gasto)
app.use("/transacao", transacao)
app.use("/empresa", empresa)

module.exports = app
