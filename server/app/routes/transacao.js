const express = require('express')

const {
    create_transacao,
    get_transacao,
    get_transacao_id,
    update_transacao,
    delete_transacao
} = require("../controllers/transacao")

const router = express.Router()

router.post("/create-transacao", create_transacao)
router.get("/get-transacao", get_transacao)
router.get("/get-transacao-id/:id", get_transacao_id)
router.put("/update-transacao/:id", update_transacao)
router.delete("/delete-transacao/:id", delete_transacao)

module.exports = router
