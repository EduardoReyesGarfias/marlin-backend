const model = require("../models/marcas.model");
const { parseId } = require("../helpers/parseData");
const { responseRequest } = require("../helpers/responses");

/**
 * Regresa todas las marcas
 * @param {*} req 
 * @param {*} res 
 */
const getMarcas = (req, res) =>{
    model.find({ activo: true }, (err, docs) => responseRequest(err, docs, res) );
}

/**
 * Inserta una nueva marca
 * @param {*} req 
 * @param {*} res 
 */
const insertMarcas = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) => responseRequest(err, docs, res) );
}

/**
 * Actualiza una marca
 * @param {*} req 
 * @param {*} res 
 */ 
const updateSingleMarca = (req, res) =>{

    const id = req.params._id;
    const dataUpdate = req.body;

    model.updateOne( { _id: parseId(id)}, dataUpdate, (err, docs) => responseRequest(err, docs, res));
}

module.exports = {
    getMarcas,
    insertMarcas,
    updateSingleMarca
}