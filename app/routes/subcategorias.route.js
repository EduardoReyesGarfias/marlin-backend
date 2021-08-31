const express = require("express");
const controller = require("../controller/subcategorias.controller");
const router = express.Router();
const path = '/subcategorias/';

/** Middlewears **/

router.get(`${path}`, controller.getSubcategorias);
router.post(`${path}`, controller.insertSubcategorias);

module.exports = router;