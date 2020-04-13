const db_api = require('../db_apis/autorizacion');

//TODO: delete...

async function post(req, res, next) {
    try {
        const context = {};
        context.dpi = req.query.dpi;
        context.nombre = req.query.nombre;
        context.fecha_nacimiento = req.query.fecha_nacimiento;
        context.correo = req.query.correo;
        context.contraseña = req.query.contraseña;
        context.id_sede = req.query.id_sede;
        if ( (context.id_sede.trim() === '') || (context.id_sede.trim().toUpperCase() === 'NULL') ) {
            context.id_sede = null;
        }

        console.log(context);

        if(req.query.dpi && req.query.nombre && req.query.fecha_nacimiento && req.query.correo && req.query.contraseña && req.query.id_sede){
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
        context.id_usuario = parseInt(req.params.id_usuario, 10);
        const rows = await db_api.listar(context);
        if (req.params.id_usuario) {
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