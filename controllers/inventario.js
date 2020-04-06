const inventario = require('../db_apis/inventario'); /*agregar operaciones de la base de datos en el archivo db_apis/inventario*/

async function get(request, response, next){
    try{
        response.status(200).json("");
    }catch(error){
        next(error);
    }
}

async function post(request, response, next){
    try{
        response.status(200).json("");
    }catch(error){
        next(error);
    }
}

async function put(request, response, next){
    try{
        response.status(200).json("");
    }catch(error){
        next(error);
    }
}

async function del(request, response, next){
    try{
        response.status(200).json("");
    }catch(error){
        next(error);
    }
}

module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
module.exports.delete = del;