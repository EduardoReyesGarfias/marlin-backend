const model = require("../models/tags.model");
const { responseRequest } = require("../helpers/responses");

/**
 * Regresa todas los tags
 * @param {*} req 
 * @param {*} res 
 */
const getTags = (req, res) =>{
    model.find({}, (err, docs) => responseRequest(err, docs, res) );
}

/**
 * inserta un nuevo tag
 * @param {*} req 
 * @param {*} res 
 */
const insertTag = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) => responseRequest(err, docs, res) );
}

module.exports = {
    getTags,
    insertTag
}