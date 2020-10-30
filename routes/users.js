var express = require('express');
var router = express.Router();

const { aggregate, update } = require('@http/UserController');


router.post('/aggregate', aggregate);

router.put('/update', update);

module.exports = router;
