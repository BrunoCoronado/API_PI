const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');
const municipio = require('../controllers/municipio');
const rol = require('../controllers/rol');
const permiso = require('../controllers/permiso');
const autorizacion = require('../controllers/autorizacion');
const usuario = require('../controllers/usuario');
const usuario_rol = require('../controllers/usuario-rol');
const sede = require('../controllers/sede');
const bodega = require('../controllers/bodega');
const producto = require('../controllers/producto');
const categoria = require('../controllers/categoria');
const inventario = require('../controllers/inventario');
const detalle_producto = require('../controllers/detalle-producto');
const log_inventario = require('../controllers/log_inventario');
const cliente = require('../controllers/cliente');


router.route('/departamento/:id?')
    .get(departamento.get);

router.route('/municipio/:id?')
    .get(municipio.get);

router.route('/rol/:id?')
    .get(rol.get);
router.route('/permiso/:id?')
    .get(permiso.get);

router.route('/autorizacion/:id_usuario?/:id_permiso?') //con este podemos ver si un determinado sujeto tiene determinado permiso, o para listar todos.
    .get(autorizacion.get);
router.route('/autorizacion2/:id_permiso?') //este es para ver todos los que tienen un permiso especifico
    .get(autorizacion.get2);


router.route('/usuario')
    .get(usuario.get)
    .post(usuario.post);

router.route('/usuario/:id_usuario')
    .get(usuario.get)
    .put(usuario.put);


router.route('/usuario_rol/:id_usuario?/:id_rol?')
    .get(usuario_rol.get)
    .post(usuario_rol.post);

router.route('/usuario_rol2/:id_rol?') //este es para ver todos los que tienen un rol especifico
    .get(usuario_rol.get2);

router.route('/sede')
    .post(sede.post)
    .get(sede.get);

router.route('/sede/:id_sede')
    .get(sede.get)
    .put(sede.put);


router.route('/bodega')
    .post(bodega.post)
    .get(bodega.get);

router.route('/bodega/:id_bodega')
    .get(bodega.get)
    .put(bodega.put);


router.route('/producto')
    .post(producto.post)
    .get(producto.get);

router.route('/producto/:id_producto')
    .get(producto.get)
    .put(producto.put);

router.route('/categoria/:id_categoria?')
    .get(categoria.get);


router.route('/detalle_producto/:id_producto/:id_categoria?')
    .get(detalle_producto.get);

router.route('/detalle_producto')
    .get(detalle_producto.get)
    .post(detalle_producto.post);

router.route('/detalle_producto2/:id_categoria?') //este es para ver todos los que tienen un rol especifico
    .get(detalle_producto.get2);


router.route('/inventario')
    .post(inventario.post)
    .get(inventario.get);

router.route('/inventario/:id_producto/:id_bodega')
    .get(inventario.get)
    .put(inventario.put);

router.route('/inventario/:id_producto')
    .get(inventario.get);

router.route('/inventario2/:id_bodega')
    .get(inventario.get);


router.route('/log_inventario/:id_producto/:id_bodega')
    .get(log_inventario.get)

router.route('/log_inventario/:id_producto?')
    .get(log_inventario.get);

router.route('/log_inventario2/:id_bodega')
    .get(log_inventario.get);



router.route('/cliente')
    .post(cliente.post)
    .get(cliente.get);

router.route('/cliente/:id_cliente')
    .get(cliente.get)
    .put(cliente.put);


module.exports = router;