const db_api = require('../db_apis/autorizacion');



async function post(req, res, next) {
    try {
        const context = {};
        context.id_usuario = parseInt(req.query.id_usuario, 10);
        context.id_permiso = parseInt(req.query.id_permiso, 10);

        if(req.query.id_permiso && req.query.id_usuario){
            context = await db_api.create(context);
            res.status(201).json(context);
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
        context.id_usuario = parseInt(req.params.id_permiso, 10);
        context.id_permiso = parseInt(req.params.id_permiso, 10);
        const rows = await db_api.listar(context);
        if (req.params.id_usuario && req.params.id_permiso) {
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


async function get2(req, res, next){
    try{
        const context = {}; //objeto generico que contendra las propiedades que son relevantes para el metodo de busqueda de la bd api
        context.id_permiso = parseInt(req.params.id_permiso, 10);
        const rows = await db_api.listar(context);
        res.status(200).json(rows);
    }catch(error){
        next(error);
    }
}

module.exports.get2 = get2;


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