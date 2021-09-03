const model = require("../models/usuarios_roles.model");
const { responseRequest } = require("../helpers/responses");

/**
 * Trae todos los roles de usuario
 * @param {*} req 
 * @param {*} res 
 */
const getUsuariosRole = (req, res) =>{
    model.find({}, (err, docs) => responseRequest(err, docs, res));
}

/**
 * Nuevo role de usuario
 * @param {*} req 
 * @param {*} res 
 */
const insertUsuariosRole = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) => responseRequest(err, docs, res) );
}

module.exports = {
    getUsuariosRole,
    insertUsuariosRole
}