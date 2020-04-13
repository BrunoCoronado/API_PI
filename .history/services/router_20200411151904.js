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

router.route('/usuario/:id_usuario?')
    .get(usuario.get)
    .post(usuario.post);

router.route('/usuario_rol/:id_usuario?/:id_rol?')
    .get(usuario_rol.get)
    .post(usuario_rol.post);

router.route('/usuario_rol2/:id_rol?') //este es para ver todos los que tienen un permiso especifico
    .get(usuario_rol.get2);

router.route('/sede')
    .post(sede.post)
    .get(sede.get);

router.route('/sede/:id_sede')
    .get(sede.get)
    .put(sede.put);


module.exports = router;