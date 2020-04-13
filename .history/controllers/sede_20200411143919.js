const db_api = require('../db_apis/sede');


async function post(req, res, next) {
    try {
        let context = {};
        context.alias = req.body.alias;
        context.direccion = req.body.direccion;
        context.id_mun = req.body.id_mun;
        context.encargado = req.body.encargado;

        if(req.body.alias && req.body.direccion && req.body.id_mun && req.body.encargado){
            let respuesta = await db_api.create(context);
            if(respuesta === undefined){
                res.status(404).json({mensaje: "No se pudo crear la sede."});
            }else{
                context.id_usuario=respuesta.insertId;
                res.status(201).json(context);
            }
        }else{
            console.log("Missing parammeters");
            res.status(404).end();
        }
    } catch (err) {
        next(err);
    }
}
  
module.exports.post = post;


async function get(req, res, next){
    try{
        const context = {}; //objeto generico que contendra las propiedades que son relevantes para el metodo de busqueda de la bd api
        context.id_sede = parseInt(req.params.id_sede, 10);
        const rows = await db_api.listar(context);
        if (req.params.id_sede) {
            if (rows.length === 1) {
                res.status(200).json(rows[0]);
            } else {
                res.status(404).end();
            }
        } else {
            res.status(200).json(rows);
        }
    }catch(error){
        next(error);
    }
}

module.exports.get = get;


async function del(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
  
      const success = await employees.delete(id);
  
      if (success) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      next(err);
    }
  }
  
  module.exports.delete = del;