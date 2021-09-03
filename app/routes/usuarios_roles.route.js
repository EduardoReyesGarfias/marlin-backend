const express = require("express");
const controller = require("../controller/usuarios_roles.controller");
const router = express.Router();
const path = "/usuarios-roles/";

router.get(`${path}`, controller.getUsuariosRole);
router.post(`${path}`, controller.insertUsuariosRole);

module.exports = router;
