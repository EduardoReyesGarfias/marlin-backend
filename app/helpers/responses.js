const responseRequest = (err, docs, res) =>{
    if(!err){
        res.status(200).json({
            error : 0,
            data: docs,
            msg: "ok"
        })
    }else{
        
        const msg = errorControl(err);
        res.status(400).json({
            error : 1,
            msg: msg
        });

    }
}

/**
 * Define la respuesta al error sucedido
 * @param {*} err 
 * @returns 
 */
const errorControl = err =>{

    console.log('Error', err);
    const code = err.code;
    let msg = "";

    if(code == "11000")
        msg = `El registro ${err.keyValue.nombreMarca} ya existe y no puede ser duplicado.`;

    return msg;
}


module.exports = {
    responseRequest
}