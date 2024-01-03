const express = require('express')

const {
    create_projetos,
    get_projetos,
    get_projetos_id,
    update_projetos,
    delete_projetos
} = require("../controllers/projetos")

const router = express.Router()

router.post("/create-projetos", create_projetos)
router.get("/get-projetos", get_projetos)
router.get("/get-projetos-id/:id", get_projetos_id)
router.put("/update-projetos/:id", update_projetos)
router.delete("/delete-projetos/:id", delete_projetos)

module.exports = router
