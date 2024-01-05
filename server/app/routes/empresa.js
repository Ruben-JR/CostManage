const express = require('express');

const {
    create_empresa,
    get_empresa,
    get_empresa_id,
    update_empresa,
    delete_empresa,
} = require("../controllers/empresa");

const router = express.Router()

router.post("/create-empresa", create_empresa)
router.get("/get-empresa", get_empresa)
router.get("/get-empresa-id/:id", get_empresa_id)
router.put("update-empresa/:id", update_empresa)
router.delete("delete-empresa/:id", delete_empresa)

module.exports = router
