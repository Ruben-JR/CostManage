const express = require('express')

const {
    create_gastos,
    get_gastos,
    get_gastos_id,
    update_gastos,
    delete_gastos
} = require("../controllers/gastos")

const router = express.Router()

router.post("/create-gastos", create_gastos)
router.get("/get-gastos", get_gastos)
router.get("/get-gastos-id/:id", get_gastos_id)
router.put("/update-gastos/:id", update_gastos)
router.delete("/delete-gastos/:id", delete_gastos)

module.exports = router
