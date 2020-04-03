const express = require('express');
const router = new express.Router();

/*Ejemplo:

    const facultad = require('../controllers/facultad');

    router.route('/facultad/:codigo?')
        .get(facultad.get)
        .post(facultad.post)
        .put(facultad.put)
        .delete(facultad.delete)
*/

module.exports = router;