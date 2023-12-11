const express = require('express')

const {
    create_tag,
    get_tag,
    get_tag_id,
    update_tag,
    delete_tag
} = require("../controllers/tag")

const router = express.Router()

router.post("/create-tag", create_tag)
router.get("/get-tag", get_tag)
router.get("/get-tag-id/:id", get_tag_id)
router.put("/update-tag/:id", update_tag)
router.delete("/delete-tag/:id", delete_tag)

module.exports = router
