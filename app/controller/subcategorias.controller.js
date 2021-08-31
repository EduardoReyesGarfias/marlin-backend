const model = require("../models/subcategorias.model");
const { responseRequest } = require("../helpers/responses");

/**
 * Regressa todas las subcategorias
 * @param {*} req 
 * @param {*} res 
 */
const getSubcategorias = (req, res) =>{
    model.find({}, (err, docs) => responseRequest(err, docs, res) );
}

/**
 * Agrega una nueva subcategoria
 * @param {*} req 
 * @param {*} res 
 */
const insertSubcategorias = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) => responseRequest(err, docs, res) );
}

module.exports = {
    getSubcategorias,
    insertSubcategorias
}