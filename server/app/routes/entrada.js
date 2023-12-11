const express = require('express')

const {
    create_entrada,
    get_entrada,
    get_entrada_id,
    update_entrada,
    delete_entrada
} = require("../controllers/entrada")

const router = express.Router()

router.post("/create-entrada", create_entrada)
router.get("/get-entrada", get_entrada)
router.get("/get-entrada-id/:id", get_entrada_id)
router.put("/update-entrada/:id", update_entrada)
router.delete("/delete-entrada/:id", delete_entrada)

module.exports = router
