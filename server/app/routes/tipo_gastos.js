const express = require('express')

const {
    create_tipo_gastos,
    get_tipo_gastos,
    get_tipo_gastos_id,
    update_tipo_gastos,
    delete_tipo_gastos
} = require("../controllers/tipo_gastos")

const router = express.Router()

router.post("/create-tipo_gastos", create_tipo_gastos)
router.get("/get-tipo_gastos", get_tipo_gastos)
router.get("/get-tipo_gastos-id/:id", get_tipo_gastos_id)
router.put("/update-tipo_gastos/:id", update_tipo_gastos)
router.delete("/delete-tipo_gastos/:id", delete_tipo_gastos)

module.exports = router
