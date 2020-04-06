const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');
const producto = require('../controllers/producto');
const inventario = require('../controllers/inventario');

router.route('/departamento')
    .get(departamento.get);

router.route('/producto/:codigo?')
    .get(producto.get)
    .post(producto.post)
    .put(producto.put)
    .delete(producto.delete);

router.route('/inventario/:codigo?')
    .get(inventario.get)
    .post(inventario.post)
    .put(inventario.put)
    .delete(inventario.delete);

module.exports = router;