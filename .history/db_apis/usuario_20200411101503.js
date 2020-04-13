const database = require('../services/database');

async function listar(context){
    let query  = "SELECT * FROM usuario ";
    const binds = [];

    if(context.id_rol){
        binds.push(context.id_rol);

        query += " WHERE id_usuario=?";
    }
    const result = await database.executeQuery(query, binds);
    return result;
}



async function create(context){
    let query= "INSERT INTO usuario (dpi, nombre, fecha_nacimiento, correo, contraseña, id_sede) VALUES (?,?,?,?,?,?)";
    const binds = [];

    binds.push(context.dpi);
    binds.push(context.nombre);
    binds.push(context.fecha_nacimiento);
    binds.push(context.correo);
    binds.push(context.contraseña);
    binds.push(context.id_sede);

    const result = await database.executeQuery(query, binds);
    return result;
}



module.exports.listar = listar;
module.exports.create = create;



async function del(id) {
    const binds = {
      employee_id: id,
      rowcount: {
        dir: oracledb.BIND_OUT,
        type: oracledb.NUMBER
      }
    }
    const result = await database.simpleExecute(deleteSql, binds);
  
    return result.outBinds.rowcount === 1;
  }
  
  module.exports.delete = del;