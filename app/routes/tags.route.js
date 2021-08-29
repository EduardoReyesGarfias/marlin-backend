const express = require("express");
const controller = require("../controller/tags.controller");
const router = express.Router();
const path = '/tags/';

router.get(`${path}`, controller.getTags);

router.post(`${path}`, controller.insertTag);

module.exports = router;