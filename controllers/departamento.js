const departamento = require('../db_apis/departamento');

async function get(request, response, next){
    try{
        const result = await departamento.listar();
        response.status(200).json(result);
    }catch(error){
        next(error);
    }
}

module.exports.get = get;