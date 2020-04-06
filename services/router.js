const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');
const sede = require('../controllers/sede');
const bodega = require('../controllers/bodega');

router.route('/departamento')
    .get(departamento.get);

router.route('/sede/:codigo?')
    .get(sede.get)
    .post(sede.post)
    .put(sede.put)
    .delete(sede.delete);

router.route('/bodega/:codigo?')
    .get(bodega.get)
    .post(bodega.post)
    .put(bodega.put)
    .delete(bodega.delete);


module.exports = router;