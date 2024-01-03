const express = require('express')

const {
    create_funcionarios,
    get_funcionarios,
    get_funcionarios_id,
    update_funcionarios,
    delete_funcionarios
} = require("../controllers/funcionarios")

const router = express.Router()

router.post("/create-funcionarios", create_funcionarios)
router.get("/get-funcionarios", get_funcionarios)
router.get("/get-funcionarios-id/:id", get_funcionarios_id)
router.put("/update-funcionarios/:id", update_funcionarios)
router.delete("/delete-funcionarios/:id", delete_funcionarios)

module.exports = router
