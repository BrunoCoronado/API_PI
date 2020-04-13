const database = require('../services/database');

async function listar(context){
    let query  = "SELECT * FROM autorizacion ";
    const binds = [];

    if (context.id_rol && context.id_permiso) {//verifica si context tiene el atributo id
        binds.push(context.id_rol);
        binds.push(context.id_permiso);

        query += " WHERE id_rol=? AND id_permiso=?";
    }else if(context.id_rol){
        binds.push(context.id_rol);

        query += " WHERE id_rol=?";
    }
    else if(context.id_permiso){
        binds.push(context.id_permiso);

        query += " WHERE id_permiso=?";
    }
    const result = await database.executeQuery(query, binds);
    return result;
}



module.exports.listar = listar;