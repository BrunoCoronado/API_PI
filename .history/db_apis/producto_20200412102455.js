const database = require('../services/database');

async function listar(context){
    let query  = "SELECT * FROM producto ";
    const binds = [];

    if(context.id_producto){
        binds.push(context.id_producto);

        query += " WHERE id_producto=?";
    }
    const result = await database.executeQuery(query, binds);
    return result;
}

module.exports.listar = listar;


async function create(context){
    let query= "INSERT INTO producto (nombre, codigo_barras, descripcion, precio) VALUES (?,?,?,?)";
    let binds = [];

    binds.push(context.nombre);
    binds.push(context.codigo_barras);
    binds.push(context.descripcion);
    binds.push(context.precio);
    const result = await database.executeQuery(query, binds);
    return result;
}


module.exports.create = create;

async function update(context){
  let query= "UPDATE sede SET alias=?, direccion=?, id_mun=?, encargado=? WHERE id_sede=?";
  let binds = [];

  binds.push(context.alias);
  binds.push(context.direccion);
  binds.push(context.id_mun);
  binds.push(context.encargado);
  binds.push(context.id_sede);
  const result = await database.executeQuery(query, binds);
  return result;
}


module.exports.update = update;



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