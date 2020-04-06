const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');
const venta = require('../controllers/venta');
const ordenTransferencia = require('../controllers/ordenTransferencia');


router.route('/departamento')
    .get(departamento.get);

router.route('/venta/:codigo?')
    .get(venta.get)
    .post(venta.post)
    .put(venta.put)
    .delete(venta.delete);

router.route('/ordenTransferencia/:codigo?')
    .get(ordenTransferencia.get)
    .post(ordenTransferencia.post)
    .put(ordenTransferencia.put)
    .delete(ordenTransferencia.delete);

module.exports = router;