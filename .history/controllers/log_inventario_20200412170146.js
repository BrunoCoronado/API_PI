const db_api = require('../db_apis/log_inventario');

async function get(req, res, next){
    try{
        const context = {}; //objeto generico que contendra las propiedades que son relevantes para el metodo de busqueda de la bd api
        context.id_producto = parseInt(req.params.id_producto, 10);
        context.id_bodega = parseInt(req.params.id_bodega, 10);
        
        const rows = await db_api.listar(context);
        if (req.params.id) {
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