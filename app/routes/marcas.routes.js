const express = require("express");
const controller = require("../controller/marcas.controller");
const path = "/marcas/";
const router = express.Router();

router.get(`${path}`, controller.getMarcas);
router.post(`${path}`, controller.insertMarcas);
router.put(`${path}:_id`, controller.updateSingleMarca);

module.exports = router;