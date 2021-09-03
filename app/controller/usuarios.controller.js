const model = require("../models/usuarios.model");
const { responseRequest } = require("../helpers/responses");

/**
 * Trae todos los usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = (req, res) =>{

    const fields = ['_id', 'email', 'createdAt', 'updatedAt', 'id_role'];
    const populateRole = { path: "id_role", select: 'role' };

    model.find({}, fields.join(' '),(err, docs) => responseRequest(err, docs, res))
    .populate(populateRole);
}

const insertUser = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) => responseRequest(err, docs, res));
}

module.exports = {
    getUsers,
    insertUser
}