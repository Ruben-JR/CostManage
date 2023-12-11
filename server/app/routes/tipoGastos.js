const express = require('express')

const {
    create_tipoGastos,
    get_tipoGastos,
    get_tipoGastos_id,
    update_tipoGastos,
    delete_tipoGastos
} = require("../controllers/tipoGastos")

const router = express.Router()

router.post("/create-tipoGastos", create_tipoGastos)
router.get("/get-tipoGastos", get_tipoGastos)
router.get("/get-tipoGastos-id/:id", get_tipoGastos_id)
router.put("/update-tipoGastos/:id", update_tipoGastos)
router.delete("/delete-tipoGastos/:id", delete_tipoGastos)

module.exports = router
