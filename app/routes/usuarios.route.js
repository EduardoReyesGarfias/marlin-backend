const express = require("express");
const controller = require("../controller/usuarios.controller");
const router = express.Router();
const path = '/usuarios/';

router.get(`${path}`, controller.getUsers);
router.post(`${path}`, controller.insertUser);

module.exports = router;