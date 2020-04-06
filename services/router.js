const express = require('express');
const router = new express.Router();

const departamento = require('../controllers/departamento');

router.route('/departamento')
    .get(departamento.get);

module.exports = router;