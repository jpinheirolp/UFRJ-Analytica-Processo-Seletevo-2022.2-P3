const express = require("express");
const router = express.Router();
const controler = require("../../controllers/album_info_controller");

router.get("/", controler.get_last_album);

module.exports = router;