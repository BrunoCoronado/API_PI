const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');
const municipio = require('../controllers/municipio');
const rol = require('../controllers/rol');
const permiso = require('../controllers/permiso');
const autorizacion = require('../controllers/autorizacion');

router.route('/departamento/:id?')
    .get(departamento.get);

router.route('/municipio/:id?')
    .get(municipio.get);

router.route('/rol/:id?')
    .get(rol.get);
router.route('/permiso/:id?')
    .get(permiso.get);

router.route('/autorizacion/:id_rol?/:id_permiso?') //con este podemos ver si un determinado sujeto tiene determinado permiso, o para listar todos.
    .get(autorizacion.get);
router.route('/autorizacion2/:id_permiso?') //este es para ver todos los que tienen un permiso especifico
    .get(autorizacion.get2);
module.exports = router;