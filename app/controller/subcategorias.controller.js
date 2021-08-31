const model = require("../models/subcategorias.model");

const getSubcategorias = (req, res) =>{
    model.find({}, (err, docs) =>{
        if(!err){
            res.status(200).json({
                error : 0,
                data: docs,
                msg: "ok"
            })
        }
    });
}


const insertSubcategorias = (req, res) =>{
    const data = req.body;
    model.create( data, (err, docs) =>{
        if(!err){
            res.status(200).json({
                error : 0,
                data: docs,
                msg: "ok"
            }) 
        }else{
            if(err.code == "11000")
                res.status(400).send({
                    error : 1,
                    data: err,
                    msg: "Registro ya existe y no puede ser duplicado"
                }) 
        }
    });
}

module.exports = {
    getSubcategorias,
    insertSubcategorias
}