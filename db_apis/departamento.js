const database = require('../services/database');

async function listar(){
    let query  = "SELECT * FROM departamento;";
    const result = await database.executeQuery(query);
    return result;
}

module.exports.listar = listar;